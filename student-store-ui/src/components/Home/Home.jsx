import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero.jsx"
import Search from "./Search.jsx"
import ProductGrid from "../ProductGrid/ProductGrid.jsx"
import AboutUs from "./AboutUs"
import ContactUs from "./ContactUs"

export default function Home({categoryStatus, handleCategoriesClick, categories, handleSearchChange, searchStatus, shoppingCart, products, handleAddItemToCart, handleRemoveItemFromCart, isFetching}) {
  return (
    <div className="home">
      <Hero/>
      <Search 
        categoryStatus={categoryStatus}
        handleCategoriesClick={handleCategoriesClick}
        categories={categories}
        handleSearchChange={handleSearchChange}
        searchStatus={searchStatus}
      />
      <ProductGrid 
        isFetching={isFetching}
        shoppingCart={shoppingCart}
        products={products}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemFromCart={handleRemoveItemFromCart}
      />
      <AboutUs />
      <ContactUs />
    </div>
  )
}
