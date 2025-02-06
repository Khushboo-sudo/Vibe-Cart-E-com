import React, { useState } from 'react'
import Navbar from './Components/navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import Footer from './Components/Footer'
import Cart from './Pages/Cart'
import CheckOut from './Pages/CheckOut'
import Order from './Pages/Order'
import FilteredData from './Pages/FilteredData'
import ProducDetail from './Pages/ProducDetail'





function App() {

  const [order, setOrder]= useState(null)
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element= {<Home/>}  />
      <Route path='/shop' element= {<Shop/>}  />
      <Route path='/cart' element= {<Cart/>}  />
      <Route path='/checkout' element= {<CheckOut setOrder={setOrder}/>}  />
      <Route path='/order-summary' element= {<Order order={order}/>}  />
      <Route path='/filter-data' element= {<FilteredData/>}  />
      <Route path='/product/:id' element= {<ProducDetail/>}  />
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App