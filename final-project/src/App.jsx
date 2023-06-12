
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import ProductList from "./Components/ProductList/ProductList";
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Checkout/Checkout";
import OrderHistory from "./Components/OrderHistory/OrderHistory";
import Clothes from "./Components/Clothes/Clothes";
import Shoes from "./Components/Shoes/Shoes";
import About from "./Components/About/About";
const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<OrderHistory />} />
          <Route path="/clothes" element={<Clothes />} />
          <Route path="/about" element={<About />} />
          <Route path="/shoes" element={<Shoes />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
