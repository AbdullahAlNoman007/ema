import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const cart =props.cart
    return (
        <div>
            <p className='Order-title'>Order Summary</p>
            <p>Selected Items:{cart.length}</p>            
        </div>
    );
};

export default Cart;