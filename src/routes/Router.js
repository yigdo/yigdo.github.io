import React from 'react'
import {
       BrowserRouter,
       Routes,
       Route,
       HashRouter
} from 'react-router-dom'

import About from '../pages/About';
import Home from "../pages/Home";

export default function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}
