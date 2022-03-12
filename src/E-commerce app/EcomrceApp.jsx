import React from 'react'
import Home from './components/Home Page/Home';
import Navigation from './components/Navigation';
import Products from './components/Products';
import About from './components/About'
import Contact from './components/Contact page/Contact'
import { Route, Routes } from 'react-router-dom';
import Bookproduct from './components/Bookproduct';
import Cart from './components/Cart';
import Login from './components/Authentication/Login in/Login';
import Signup from './components/Authentication/Sign up/Signup';
import Payment from './components/payment/Payment';
import ErrorPage from './components/Erro page/ErrorPage';

 const EcomrceApp = () => {
  return (
    <>

<Navigation/>
 
    <Routes>
      <Route path='/'             element={<Home/>} />
      <Route path='/products'     element={<Products/>} />
      <Route path='/about'        element={<About/>} />
      <Route path='/contact'      element={<Contact/>} />
      <Route path='/sign'         element={<Login/>} />
      <Route path='/register'     element={<Signup/>} />
      <Route path='products/:id' element={<Bookproduct/>} />
      <Route path='/cart'         element={<Cart/>} />
      <Route path='/cart/payment' element={<Payment/>}   />
      <Route path="*"             element={<ErrorPage/>} />
    </Routes>
    </>
  )
}

export default EcomrceApp;
