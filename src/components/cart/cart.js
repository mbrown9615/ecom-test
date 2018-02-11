import React, { Component } from 'react';
import Nav from '../nav/nav';
import axios from 'axios';
import { connect } from 'react-redux';
import { getCart, changeQuantity } from '../../ducks/reducer';

class Cart extends Component{

    componentDidMount(){
        this.props.getCart()
    }

    deleteAll(){
        axios.delete(`/api/removeall`).then(data => {
            this.props.getCart();
        })
    }

    deleteThing(id){
        axios.delete(`/api/remove/${id}`).then(data => {
            this.props.getCart();
        })
    }

    change(e,id){
        const body = {}
        body.id = id
        body.stuff = e.target.value
        this.props.changeQuantity(body)
    }

    displayCart(){
        let cart = this.props.cart.map(thing =>{
            return(
                <div className="product-card"  key={thing.id}>
                    <h1>{thing.product_name}</h1>
                    <img className="productImg" src={thing.img}/>
                    
                     <input onChange={(e)=>this.change(e, thing.id)} placeholder="1" type="number" name="quantity" min="1" max="5" />
                     <button onClick={() => this.deleteThing(thing.id)}>X</button>
                </div>
            )
        })
        return cart;
    }

    render(){
        console.log(this.props.cart)
        return (
            <div className="cart">
                <Nav />
                <button onClick={()=>{this.deleteAll}}>delete all</button>
                <div className="productPage">
                {this.displayCart()}
                </div>
            </div>
        )
    }
}

function mapStateToProps({ cart }) {
    return { cart }
}

export default connect(mapStateToProps, {
    getCart,
    changeQuantity
})(Cart);