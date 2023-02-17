import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import Meta from './components/Meta';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Ourstore from './pages/Ourstore';

function App() {
  return (
    <div className="m-0">
      <BrowserRouter>
        <Header />
        <Meta head={"Eshoppers"} />
          <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/store' element={<Ourstore />}/>
              <Route path='/about' element={<About />}/>
              <Route path='/contact' element={<Contact />}/>
          </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
