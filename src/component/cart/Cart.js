import React from 'react';
import './Cart.css'
const Cart = ({carts}) => {
    let price=0
    let Shipping=0
    let quantity =0
    for(const cart of carts){
        quantity =quantity+cart.quantity
        price =price + cart.price*cart.quantity
        Shipping =Shipping + cart.shipping*cart.quantity
    }
    const tax =parseFloat((price*0.1).toFixed(2))
    let total = price+Shipping+tax
    return (
        <div className='cart'>
            <p className='Order-title'>Order Summary</p>
            <div className='order-info'>
                <p>Selected Items:{quantity}</p>
                <p>Total Price: ${price}</p>
                <p>Total Shipping Charge: ${Shipping}</p>
                <p>Tax: ${tax}</p>
                <p id='total'>Grand Total: ${total}</p>
            </div>      
        </div>
    );
};

export default Cart;