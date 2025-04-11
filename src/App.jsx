import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Cart from './pages/Cart'
import All_Products from './components/All_Products'
import Product_Details from './pages/Product_Details'
import ProductByCategory from './pages/ProductByCategory'
import Search_Products from './pages/Search_Product'
import TrendingSlider from './components/Trending_Slider'

const App = () => {
  // App.jsx
  return (
    <Router>
       <Navbar/>
      <Routes>
        <Route path="/" element={<All_Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<Product_Details />} />
        <Route path="/product/category/:cat" element={<ProductByCategory />} />
        <Route path="/product/search/:term" element={<Search_Products />} />
       
       
      </Routes>
      {/* <TrendingSlider /> */}
    </Router>
  )
}

export default App