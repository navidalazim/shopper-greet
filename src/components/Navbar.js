import React from 'react';
import './Navbar.css';
import logo from '../images/logo.png';

const Navbar = () => {
    return (
        <div className="navbar">

         <div className="logo-container">
            <img className="logo" src={logo} alt="logo"/>
         </div>
         <div className="form-holder">
         <form  action="/" method="get">
        <input
            type="text"
            id="header-search"
            placeholder="Search Items"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
    </div>
    
    <i class="fas fa-shopping-cart fa-2x"></i>
    
         
            
        </div>
    )
}

export default Navbar
