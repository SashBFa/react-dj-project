import { AnimatePresence } from "framer-motion";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./assets/pages/About";
import Discography from "./assets/pages/Discography";
import Err from "./assets/pages/Err";
import Gallery from "./assets/pages/Gallery";
import Home from "./assets/pages/Home";
import Tour from "./assets/pages/Tour";

const App = () => {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/discography" element={<Discography />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="*" element={<Err />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
};

export default App;
