import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./companents/Navbar";
import Footer from "./companents/Footer";

import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
