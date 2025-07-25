import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Shop from "./components/Shop";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout"; 
import ThankYou from './pages/ThankYou'; 
import AOS from 'aos';
import 'aos/dist/aos.css';
//import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() =>{
    AOS.init({
      duration:1000,
      once:true,
    });
  },[]);
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <Router>
        <Navbar cart={cart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop cart={cart} setCart={setCart} />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
          <Route path="/checkout" element={<Checkout cart={cart} setCart={setCart} />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
