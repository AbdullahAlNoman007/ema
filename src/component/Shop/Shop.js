import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './Shop.css'

const Shop = () => {
    const [items,setItems]=useState([])
    const [cart,setCart]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setItems(data))
    },[])
    const AddtoCart=(product)=>{
            const newCart = [...cart,product]
            setCart(newCart)           
    }
    return (
        <div className='shopping-box'>
            <div className="product-container">
            {
                items.map(item => <Product addtocart={AddtoCart} item={item} key={item.id}></Product>)
            }
            </div>
            <div className="order">
            <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;