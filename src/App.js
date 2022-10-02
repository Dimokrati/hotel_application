import React from "react";
import "./style.css";

import Gallery from "./pages/Gallery";
import Reserve from "./pages/Reserve";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Overview from "./pages/Overview";
import Available from "./pages/Available";





export default function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Overview />}/>
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Reserve" element={<Reserve />} />
          <Route path="/Available" element={<Available />} />
      </Routes>
    </Router>
  );
}




