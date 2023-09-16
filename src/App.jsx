import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Status from './components/Status'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Categories from './components/Categorie'
const App = ()=>{



return (
  <BrowserRouter>
      <div>
        <Navbar />

          <Hero/>
          <Features/>
          <Status/>
          <Categories/>
          <About />
           <Contact />
     
        <Footer/>
      </div>
    </BrowserRouter>

);

}

export default App
