import * as React from "react"
import "./Home.css"
import Header from "./Header.jsx"
import Search from "./Search.jsx"
import Products from "./Products.jsx"
import AboutUs from "./AboutUs"
import ContactUs from "./ContactUs"

export default function Home(props) {
  return (
    <div className="home">
      <Header/>
      <Search 
        categoryStatus={props.categoryStatus}
        handleCategoriesClick={props.handleCategoriesClick}
        categories={props.categories}
        handleSearchChange={props.handleSearchChange}
        searchStatus={props.searchStatus}
      />
      <Products 
        products={props.products}
      />
      <AboutUs />
      <ContactUs />
    </div>
  )
}
