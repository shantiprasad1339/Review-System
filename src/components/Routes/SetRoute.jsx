
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 
  import '../css/style.scss'
  import '../css/style.css'
  import '../css/resposive.css'
  import '../css/quill.snow.css'
  import '../css/swiper-bundle.min.css'
  import '../css/quill.core.css'
  import '../css/main.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js' ;
    
import React, { useState, useEffect } from 'react';  
import Home from "../jsx/home/Home.jsx";
import About from "../jsx/about/about.jsx";
import Login from "../jsx/login/login.jsx";
import Register from "../jsx/register/register.jsx";
import Contact_us from "../jsx/contact_us/contact_us.jsx";
import Bids from "../jsx/bids/bids.jsx";
import Bids_details from "../jsx/bids_details/bids_details.jsx";
import Dashboard from "../jsx/dashboard/dashboard.jsx"
import Otpverification from "../jsx/email-otp/Otpverification.jsx";
 


function SetRoute() {
 
 
  return (
    <>
        <Router> 
        <Routes>
        <Route path="/" element={  <Home />}></Route> 
        <Route path="/about" element={  <About />}></Route> 
        <Route path="/login" element={  <Login />}></Route> 
        <Route path="/register" element={  <Register />}></Route>
        <Route path="/contact" element={  <Contact_us />}></Route>
        <Route path="/bids" element={  <Bids />}></Route>
        <Route path="/bids-details/:id" element={<Bids_details />} />
        <Route path="/dashboard" element={  <Dashboard />}></Route>
        <Route path="/opt" element={  <Otpverification/>}></Route>
        
        </Routes>
      </Router>
    </>

  );
};

export default SetRoute;




