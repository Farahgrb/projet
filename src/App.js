import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Navv from "./components/Navv.js";
import Footer from "./components/Footer.js";
import Router from "./Router.js";

//import Women from "./components/Women.js";
//import Men from "./components/Men.js";

export default function App() {
  return (
    <div>
      <Navv/>
      <Router/>
      <Footer/>
    </div>
  )}