import React, { Component } from 'react';
import Nav from '../nav/nav';
import axios from 'axios';
import { connect } from 'react-redux';
import { getProducts, addToCart } from '../../ducks/reducer';


class Store extends Component {
    constructor() {
        super();

        this.displayProducts = this.displayProducts.bind(this)
    }

    componentDidMount() {
        this.props.getProducts()
    }

    addTo(id, name) {
        const body = {};
        body.id = id
        body.name = name
        this.props.addToCart(body)
    }

    displayProducts() {
        
        const products = this.props.products.map((products) => {
            return (
                <div className="product-card" key={products.id}>
                    <h1>{products.product_name}</h1>
                    <img className="productImg" src={products.img} />
                    <div>
                        <h4>Price: ${products.price}</h4>
                        <button onClick={() => { this.addTo(products.id, products.product_name) }}>+</button>
                    </div>
                </div>
            )
        })
        return products
    }

    render() {
        return (
            <div className="store">
                <Nav />
                <div className="productPage">
                    {this.displayProducts()}
                </div>
            </div>
        )
    }
}

function mapStateToProps({ products }) {
    return { products }
}

export default connect(mapStateToProps, {
    getProducts
    , addToCart
})(Store);