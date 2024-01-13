import React, { useContext } from "react";
import Logo from "../assets/perfumelogo.png";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../styles/Navbar.css";

function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={Logo} alt="Logo" />
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart" className="cartLink">
            <i className="bi bi-bag"></i>
            {cart.length > 0 && <span className="cartCount">{cart.length}</span>}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
