import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="navbar-link"><Link to="/">Home</Link></div>
        {/* <div className="navbar-link"><Link to="/Catalog">Catalog</Link></div> */}
    </nav>
  );
}


export default Navbar;