import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';

function Nav() {
  const navStyles={
    color:"white",
    textDecoration: "none",
  };
  return (
    <div>
      <nav>
        <Link style={navStyles} to="/">
        <h3>Logo</h3>
        </Link>
        
        <ul className="nav-links">
          <Link style={navStyles} to="/about">
          <li>About</li>
          </Link>
         <Link style={navStyles} to="/shop">
         <li>Shop</li>
         </Link>
          
        </ul>
      </nav>
      
    </div>
  );
}

export default Nav;
