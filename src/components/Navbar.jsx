import React  from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = ({cart}) =>{
  return (
    <div className="navbar">
      <div className="nav-left">Miss Ash</div>
      <div className="navbar-links">
        <Link to ="/">Home</Link>
        <Link to ="/shop">Shop</Link>
        <Link to ="/about">About</Link>
        <Link to ="/contact">Contact</Link>
        </div>
        <div className="nav-right">
        <Link to="/cart">&#128722; ({cart.length})</Link>
      </div>
    </div>
  );
};

export default Navbar;
