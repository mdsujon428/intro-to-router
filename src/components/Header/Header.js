import React from 'react';
import { NavLink, } from 'react-router-dom';
const Header = () => {
    return (
        <nav>
            <NavLink to='/home' activeStyle={{ fontWeight: 'bold', color: 'red', fontSize: '20px' }}> Home </NavLink>
            <NavLink to="/about" activeStyle={{ fontWeight: 'bold', color: 'red', textDecoration: "under-line", fontSize: '20px' }}> About </NavLink>
            <NavLink to="/about/culture" activeStyle={{ fontWeight: 'bold', color: 'red', textDecoration: "under-line", fontSize: '20px' }}>Culture </NavLink>
            <NavLink to="/friends" activeStyle={{ fontWeight: 'bold', color: 'red', fontSize: '22px' }}>Friends </NavLink>
        </nav>
    );
};

export default Header;