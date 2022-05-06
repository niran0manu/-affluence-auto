import React from 'react';
import logo from "../images/logo.png";
import {FaAlignRight} from 'react-icons/fa';
import { Link } from "react-router-dom";
import  {useState} from 'react'


function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar"> 
        <div className="nav-center"> 
            <div className="nav-header">
                <Link to ="/">
                    <img className="logo" src={logo} alt="Logo" />
                </Link>
                <button type="button" className="nav-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <FaAlignRight className="nav-icon" />
                </button>                
                
            </div> 
            <ul className={isMenuOpen ? "nav-links show-nav" : "nav-links"}>
                <li>
                    <Link to= "/"> Home
                    </Link>
                 </li>
                 <li>
                    <Link to ="/cars"> Cars
                    </Link>
                 </li>
            </ul>       
        </div>        
    </nav>
  )
}

export default Navbar








