import React from "react";
import {Routes, Route} from "react-router-dom";

import {Home, Hotels, Hotel} from 'pages'

import './App.scss';


function App() {
  return (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<Hotels />}/>
          <Route path="/hotels/:id" element={<Hotel />} />
      </Routes>
  );
}

export default App;
