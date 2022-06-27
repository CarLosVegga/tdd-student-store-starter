import * as React from "react"
import "./Hero.css"
import heroImage from './../../img/codepath.png'

export default function Hero() {
  return (
    <div className="hero">
        <div className="intro">
          <h2>Welcome! You made it to the student store</h2>
          <p>Take a look at all our products! Everything you have always wanted and more! 
          Checkout is just one click away. Don't miss your opportunity!
          </p>
        </div>
        <img className="hero-img" src={heroImage} alt="heroimage" />
    </div>
  )
}
