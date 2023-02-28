import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <div className='nav'>
            <img src={logo} alt="" srcset="" />
            <div>
                <a href="/order">Order</a>
                <a href="/orderReview">Order Review</a>
                <a href="manageInventory">Manage Inventory</a>
                <a className='last-ref' href="logIn">Log In</a>
            </div>
        </div>
    );
};

export default Header;