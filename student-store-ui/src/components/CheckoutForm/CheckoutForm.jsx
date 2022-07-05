import "./CheckoutForm.css"

export default function CheckoutForm({isOpen, shoppingCart, checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm, error, isSubmitted, receipt}){
    let canSubmit = false
    let buttonClass = "checkout-button"
    if (checkoutForm.name.length > 0 && checkoutForm.email.length > 0 && shoppingCart.length>0) {
        buttonClass = "checkout-button open"
        canSubmit = true
    }
    if (!error && isSubmitted && shoppingCart.length===0 && isOpen){
        return (
            <>
                <p className="success">Success!</p>
                <div className="receipt">
                    {receipt.map((line) => <Receipt line={line}/>)}
                </div>
            </>
        )
    }
        
    if (error && isOpen)
        return (
            <p className="error">{error.message}</p>
        )
    if (isOpen)
        return (
            <div className="checkout-form">
                <h3>Checkout</h3>
                <input name="email" type="email" placeholder="student@codepath.org" value={checkoutForm.email} onChange={(e)=>handleOnCheckoutFormChange(e.target.name, e.target.value)} className="checkout-form-input" required/>
                <input name="name" type="text" placeholder="Student Name" value={checkoutForm.name}  onChange={(e)=>handleOnCheckoutFormChange(e.target.name, e.target.value)} className="checkout-form-input" required/>
                <button className={buttonClass} onClick={handleOnSubmitCheckoutForm} disabled={!canSubmit}>Checkout</button>
            </div>
    )
    return null
}

export function Receipt({line}) {
    return (
        <p className="receipt-line">{line}</p>
    )
}