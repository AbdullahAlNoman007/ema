import React, { useEffect, useState } from 'react';
import { addToDb, getShortCart } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './Shop.css'
const Shop = () => {
    const [items,setItems]=useState([])
    const [cart ,setCart] =useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setItems(data))
    },[]) 
    useEffect(()=>{
        const storedCart= getShortCart()
        const saveCart=[]
        for(const id in storedCart){
           const localData = items.find(item => id === item.id)
          if(localData){
            const newquantity=storedCart[id]
            localData['quantity']= newquantity
            saveCart.push(localData)
          } 
        }
        setCart(saveCart)

    },[items]) 
    const addtoCart =(product)=>{
        let newcart={}
        const exists = cart.find(productt => productt.id === product.id )
        if(!exists){
            product.quantity=1
            newcart=[...cart,product]
        }
        else{

            const rest =cart.filter(productt=>productt.id !== product.id)
            exists.quantity=exists.quantity+1
            newcart =[...rest,exists]
        }
        setCart(newcart)
        addToDb(product.id)
    }
    return (
        <div className='shopping-box'>
            <div className="product-container">
            {
                items.map(item => <Product add={addtoCart} item={item} key={item.id}></Product>)
            }
            </div>
            <div className="order">
            <Cart carts={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;