import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {name,img,price,ratings,seller}= props.item
        const {add}=props
    return (
        <div className='product'>
            <img src={img} alt="ProductPicture" />
            <div className='product-info' >
                <div className='data'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} start</p>
                </div>               
                <button className='btn' onClick={()=>add(props.item)}><p>Add to Cart</p><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>               
            </div>
            
        </div>
    );
};

export default Product;