import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Checkout from "./components/Checkout";
import Cart from "./components/Cart";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import SingleProduct from "./pages/SingleProduct";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop/:title" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
