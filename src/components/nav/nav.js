import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component{

    render(){
        return(
            <div>
                <div className="App-header">
                    
                    <Link to="/"><span>store</span></Link>
                    <Link to="/cart"><span>cart</span></Link> 
                    
                </div>
            </div>
        )
    }
}