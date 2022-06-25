//import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Mercedes } from './components/mercedes';
// import { Bmw } from './components/bmw';
// import { Audi } from './components/audi';
// import { Audis } from './components/audis';
import { Brands } from './components/brands';
import {Brand } from './components/brand';
import {Names} from './components/names';
import './style.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        {/* <Route path="Audi" element={<Audi />}>
          <Route path=":AudisID" element={<Audis />} >
          </Route>
        </Route>
        <Route path="Mercedes" element={<Mercedes />}></Route>
        <Route path="BMW" element={<Bmw />}></Route> */}
        <Route path="brands" element={<Brands />} />
        <Route path='brands/:brand' element={<Brand />} />
        <Route path='brands/:brand/:name' element={<Names />} />
      </Route>
    </Routes>

  </BrowserRouter>


);

