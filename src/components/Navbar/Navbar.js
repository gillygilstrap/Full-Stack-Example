import React from 'react';
import {Link} from 'react-router-dom'
import './navbar.css'

const NavBar = () => {
    return (
        <div className="navbar">
            <div className='logo'>Cool-Couches</div>
            <div><Link to='/'>Home</Link></div>
            <div><Link to='/cool-couches'>Couches</Link></div>
            <div><Link to='/profile'>Profile</Link></div>
            
            
        </div>
    )
}

export default NavBar;