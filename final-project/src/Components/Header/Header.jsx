import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/">Shop</Link>
      </div>

      <nav>
        <ul>
          <li>
            <Link to="../About/About.jsx">ABOUT</Link>
          </li>
          <li>
            <Link to="../Clothes/Clothes.jsx">CLOTHES</Link>
          </li>
          <li>
            <Link to="../Shoes/Shoes.jsx">SHOES</Link>
          </li>
          <li>
            <Link to="../Accessoires/Accessoires.jsx">ACCESSOIRES</Link>
          </li>
          <li>
            <Link to="../ProductList/ProductList.jsx">MAIN SHOP</Link>
          </li>
        </ul>
      </nav>
      <div className="buttons">
        <div className="button">
          <button className="button-1">Sign in</button>
          <button className="button-2">Sign up</button>
          <li className="button-3">
            <Link to="/cart">Cart</Link>
          </li>
        </div>
      </div>
    </header>
  );
};

export default Header;
