import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import axios from "axios";
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import "./App.css";

const categories = ['All', 'Food', 'Clothing', 'Accessories', 'Tech'];
const URL = 'https://codepath-store-api.herokuapp.com/store'


export default function App() {
  const [searchStatus, setSearch] = React.useState('')
  const [categoryStatus, setCategory] = React.useState('All')
  const [products, setProducts] = React.useState([])
  const [currentProducts, setCurrentProducts] = React.useState([])

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios(URL)
      setProducts(data.products)
      setCurrentProducts(data.products)
    }
      
    fetchData();
  }, [])

  function handleSearchChange(searchText){
    setSearch(searchText)
  }

  function handleCategoriesClick(category) {
    setCategory(category)
  }

  function categoryProducts(product){
    if (categoryStatus === 'All' || product.category == categoryStatus.toLowerCase())
      return product
    else 
      return null
    
  }

  // Products found through find search
  useEffect(()=>{
    if (searchStatus.length === 0) {
      setCurrentProducts(products)
    }
    else {
      setCurrentProducts(currentProducts.filter(product =>  product.name.toLowerCase().includes((searchStatus).toLowerCase())))
      console.log(currentProducts)
    }
  },[searchStatus])

  // Products found through filter
  useEffect(()=>{
    setCurrentProducts(products.filter(categoryProducts))
  },[categoryStatus])




  return (
    <div className="app">
      <BrowserRouter>
        <main>
        
          {/* YOUR CODE HERE! */}
          {/* <Routes> */}
            {/* <Route path="/" element={<Home />} /> */}
            <Navbar />
            <Sidebar />
            <Home 
              categoryStatus={categoryStatus}
              handleCategoriesClick={handleCategoriesClick}
              categories={categories}
              products={currentProducts}
              handleSearchChange={handleSearchChange}
              searchStatus={searchStatus}
            />
          {/* </Routes> */}
        </main>
      </BrowserRouter>
    </div>
  )
}
