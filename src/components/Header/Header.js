import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className="nav-container">
            <div className="nav-logo">
                <img src={logo} alt="" />
            </div>
            <div className="nav-link">
                <a href="/shop">Shop</a>
                <a href="/cart">Cart</a>
                <a href="/inventory">Inventory</a>
                <a href="/contact">Contact</a>
            </div>
        </nav>
    );
};

export default Header;