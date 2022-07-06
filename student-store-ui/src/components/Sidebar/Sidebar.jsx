import * as React from "react"
import "./Sidebar.css"
import sidebarIMG from "../../img/cart.png"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import CheckoutForm from "../CheckoutForm/CheckoutForm"

export default function Sidebar({isOpen, shoppingCart, handleOnToggle, products, checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm, error, isSubmitted, receipt}) {
  let sidebarClassName = "sidebar"
  if (isOpen) {
    sidebarClassName = "sidebar-open"
  }
  return (
    <section className={sidebarClassName}>
      <button onClick={()=>handleOnToggle()} className="toggle-button" name="cart-button">
        <img src={sidebarIMG} alt="Cart" />
      </button>
      <div>Hello world</div>
      <ShoppingCart
        isOpen={isOpen}
        shoppingCart={shoppingCart}
        products={products}
      />
      <CheckoutForm
        isOpen={isOpen}
        shoppingCart={shoppingCart}
        checkoutForm={checkoutForm}
        handleOnCheckoutFormChange={handleOnCheckoutFormChange}
        handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
        error={error}
        isSubmitted={isSubmitted}
        receipt={receipt}
      />
    </section>
  )
}
