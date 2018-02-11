import axios from 'axios';

const initialState = {
    products: [],
    cart: [],
    cart_inv: 0
}

const GET_PRODUCTS = 'GET_PRODUCTS'
const GET_CART = 'GET_CART'
const ADD_CART = 'ADD_CART'
const CHANGE = 'CHANGE'

export function getProducts(){

    let products = axios.get(`/api/allproducts`).then( res =>{
        return res.data;
    })

    return {
        type: GET_PRODUCTS,
        payload: products
    }
}

export function addToCart(body){
    let cart = axios.post(`/api/addcart/`, body).then(res =>{
        return res.data;
    })

    return {
        type:ADD_CART,
        payload: cart
    }
}

export function getCart(){
    let cart = axios.get(`/api/getcart`).then( res =>{
        return res.data;
    })

    return {
        type: GET_CART,
        payload: cart
    }
}

export function changeQuantity(body){
    let quant = axios.put('/api/change', body).then( res =>{
        return res.data;
    })

    return {
        type: CHANGE,
        payload: quant
    }
}

export default function reducer(state = initialState, action) {
    switch(action.type) {

        case GET_PRODUCTS + '_FULFILLED':
        return Object.assign({}, state, {products: action.payload})

        case GET_CART + '_FULFILLED':
        return Object.assign({}, state, {cart: action.payload})

        case ADD_CART + '_FULFILLED':
        return Object.assign({}, state, {cart: action.payload})

        case CHANGE + '_FULFILLED':
        return Object.assign({}, state, {quant: action.payload})

        default:
        return state;
    }
}