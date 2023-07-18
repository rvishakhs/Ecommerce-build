import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import Meta from './components/Meta';
import About from './pages/About';
import Blogpage from './pages/Blogpage';
import Blogs from './pages/Blogs';
import Cart from './pages/Cart';
import Checkoutpage from './pages/Chekout/Checkoutpage';
import Compare from './pages/Compare';
import Contact from './pages/Contact';
import Privacypolicy from './pages/Footer/Privacypolicy';
import Refundpolicy from './pages/Footer/Refundpolicy';
import Shipping from './pages/Footer/Shipping';
import Terms from './pages/Footer/Terms';
import Forget from './pages/Forget';
import Home from './pages/Home';
import Login from './pages/Login';
import Ourstore from './pages/Ourstore';
import Productpage from './pages/Productpage,';
import Signup from './pages/Signup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  
  return (
    <>
    <div className="m-0">
      <BrowserRouter>
        <Header />
        <Meta head={"Eshoppers"} />
          <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/store' element={<Ourstore />}/>
              <Route path='/product/:id' element={<Productpage />}/>
              <Route path='/blogs' element={<Blogs />}/>
              <Route path='/blogs/:id' element={<Blogpage />}/>
              <Route path='/about' element={<About />}/>
              <Route path='/contact' element={<Contact />}/>
              <Route path='/compare' element={<Compare />}/>
              <Route path='/login' element={<Login />}/>
              <Route path='/cart' element={<Cart />}/>
              <Route path='/signup' element={<Signup />}/>
              <Route path='/forget-login' element={<Forget />}/>
              <Route path='/privacy-policy' element={<Privacypolicy />}/>
              <Route path='/Return-policy' element={<Refundpolicy />}/>
              <Route path='/Shipping-policy' element={<Shipping />}/>
              <Route path='/Terms&Conditions' element={<Terms />}/>
              <Route path='/checkout' element={<Checkoutpage />}/>                        
          </Routes>
          <ToastContainer 
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light" 
          />
        <Footer />
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
