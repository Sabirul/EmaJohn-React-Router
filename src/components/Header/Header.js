import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img className='logo' src ={logo}></img>
            <nav>
                <NavLink to={'/shop'}>ShopOrder</NavLink>
                <NavLink to='/review'>ReviewManager</NavLink>
                <NavLink to='/inventory'>Inventory</NavLink>
            </nav>
            
        </div>
    );
};

export default Header;