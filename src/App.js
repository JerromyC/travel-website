import React from 'react'
import './App.css';
import NavBar from './components/NavBar.js';
import Home from './components/pages/Home.js';
import Products from './components/pages/Products.js';
import Services from './components/pages/Services.js';
import SignUp from './components/pages/SignUp.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/products' element={<Products />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
