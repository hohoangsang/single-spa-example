import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./features/about/page/About";
import Contact from "./features/contact/page/Contact";
import Policy from "./features/policy/page/Policy";
import Product from "./features/product/page/Product";

export default function MainRoute() {
  return (
    <div>
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/policy" element={<Policy />}></Route>
      </Routes>
    </div>
  );
}
