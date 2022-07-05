import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import ProductDetail from "../ProductDetail/ProductDetail.jsx"
import Footer from "../Footer/Footer.jsx"
import NotFound from "../NotFound/NotFound.jsx"
import axios from "axios";
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import "./App.css";

const categories = ['All', 'Food', 'Clothing', 'Accessories', 'Tech'];
const URL = 'https://codepath-store-api.herokuapp.com/store'
// const URL = "http://localhost:3001/store"

export default function App() {
  const [searchStatus, setSearch] = React.useState('')
  const [categoryStatus, setCategory] = React.useState('All')
  const [products, setProducts] = React.useState([])
  const [currentProducts, setCurrentProducts] = React.useState([])
  const [isOpen, setIsOpen] = React.useState(false)
  const [shoppingCart, setShoppingCart] = React.useState([])
  const [isSubmitted, setSubmission] = React.useState(false)
  const [error, setError] = React.useState()
  const [isFetching, setIsFetching] = React.useState(true)
  const [receipt, setReceipt] = React.useState([])
  const [checkoutForm, setCheckoutForm] = React.useState({
    name: "",
    email: "",
  })


  useEffect(() => {
    async function fetchData() {
      setIsFetching(true)
      const { data } = await axios(URL).catch((err)=>{
        setError(err)
      })
      setProducts(data.products)
      setCurrentProducts(data.products)
      setIsFetching(false)
    }
      
    fetchData();
  }, [])


  function handleOnToggle(){
    setIsOpen(!isOpen)
  }

  function handleAddItemToCart(productId){
    setSubmission(false)
    const existentProduct = shoppingCart.find((shoppingProduct)=> shoppingProduct.itemId === productId)
    if (!existentProduct) {
      setShoppingCart([...shoppingCart, {itemId: productId, quantity: 1}])
    }
    else {
      const newShoppingCart = shoppingCart.filter(shoppingProduct => shoppingProduct.itemId !== productId)
      existentProduct.quantity += 1
      setShoppingCart([...newShoppingCart, existentProduct])
    }
  }

  function handleRemoveItemFromCart(productId){
    const existentProduct = shoppingCart.find((shoppingProduct)=> shoppingProduct.itemId === productId)
    if (!existentProduct) {
      null
    }
    else if (existentProduct.quantity === 1) {
      const newShoppingCart = shoppingCart.filter(shoppingProduct => shoppingProduct.itemId !== productId)
      setShoppingCart(newShoppingCart)
    }
    else {
      const newShoppingCart = shoppingCart.filter(shoppingProduct => shoppingProduct.itemId !== productId)
      existentProduct.quantity -= 1
      setShoppingCart([...newShoppingCart, existentProduct])
    }
  }

  //   name - the name attribute of the input being updated
  //   value - the new value to set for that input
  //   It should update the checkoutForm object with the new value from the correct input(s)
  function handleOnCheckoutFormChange(name, value){
    setCheckoutForm({...checkoutForm, [name]: value})
  }

  //   It should submit the user's order to the API
  //   To submit the user's order, it should leverage the axios.post method to send a POST request to the /store endpoint.
  //   The body of that POST request should be an object with two fields:
  //     The user field:
  //       Should be an object containing name and email properties
  //       Each property should be set to the correct value found in the checkoutForm
  //     The shoppingCart field:
  //       Should contain the user's order formatted as an array of objects.
  //       Each object in the array should have two fields:
  //       The itemId field should store the id of the item being purchased.
  //       The quantity field should store a number representing how many of that item the user is purchasing.
  //       Don't include the total price here, since we'll be calculating that on the backend. Remember to never trust the client!
  async function handleOnSubmitCheckoutForm(){
    console.log(checkoutForm)
    console.log(shoppingCart)
    axios.post(URL, {
      user: checkoutForm,
      shoppingCart: shoppingCart
    })
    .then( function (response) {
      setCheckoutForm({name: "", email: "",})
      setShoppingCart([])
      setSubmission(true)
      setReceipt(response.data.purchase.receipt.lines)
    })
    .catch(function (err) {
      setError(err)
      console.log(err.message)
    })
  }

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
            <Navbar />
            <Sidebar
              isOpen={isOpen}
              isSubmitted={isSubmitted}
              error={error}
              shoppingCart={shoppingCart}
              handleOnToggle={handleOnToggle} 
              products={products}
              checkoutForm={checkoutForm}
              receipt={receipt}
              handleOnCheckoutFormChange={handleOnCheckoutFormChange}
              handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
            />
            <Routes>
              <Route path="/" element={
                <Home 
                  handleOnToggle={handleOnToggle} 
                  shoppingCart={shoppingCart}
                  handleAddItemToCart={handleAddItemToCart}
                  handleRemoveItemFromCart={handleRemoveItemFromCart}
                  categoryStatus={categoryStatus}
                  handleCategoriesClick={handleCategoriesClick}
                  categories={categories}
                  products={currentProducts}
                  handleSearchChange={handleSearchChange}
                  searchStatus={searchStatus}
                  isFetching={isFetching}
                />
              } />
              <Route path="products/:productId" 
                element={
                  <ProductDetail 
                    handleAddItemToCart={handleAddItemToCart}
                    handleRemoveItemFromCart={handleRemoveItemFromCart}
                    setIsFetching={setIsFetching}
                    setError={setError}
                    isFetching={isFetching}
                    error={error}
                    shoppingCart={shoppingCart}
                  />} 
              />
              <Route path="*" element={<NotFound/>} />
            </Routes>
          <Footer/>
        </main>
      </BrowserRouter>
    </div>
  )
}
