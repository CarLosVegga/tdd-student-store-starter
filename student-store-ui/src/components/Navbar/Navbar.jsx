import * as React from "react"
import "./Navbar.css"
import Logo from "../Logo/Logo.jsx" 

export default function Navbar() {
  return (
    <nav className="navbar">
     <Logo/>
      <p>Home</p>
      <p>About Us</p>
      <p>Contact Us</p>
      <p>Buy Now</p>
    </nav>
  )
}
