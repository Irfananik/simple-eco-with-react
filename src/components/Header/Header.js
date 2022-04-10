import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase/Firebase.init';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth)

    const handleLogout = () => {
        signOut(auth)
    }
    return (
        <nav className="nav-container">
            <div className="nav-logo">
                <img src={logo} alt="" />
            </div>
            <div className="nav-link">
                <Link to="/shop">Shop</Link>
                <Link to="/order">Order</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {user? <button onClick={handleLogout}>Logout</button> :<Link to="/login">Login</Link>}
            </div>
        </nav>
    );
};

export default Header;