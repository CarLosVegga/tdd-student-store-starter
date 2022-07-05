import "./ShoppingCart.css"

export default function ShoppingCart({isOpen, products, shoppingCart}){
    if (isOpen && shoppingCart.length > 0)
        return (
            <div className="shopping-cart">
                <p className="cart-title-name">Product</p>
                <p className="cart-title-quantity">Quantity</p>
                <p className="cart-title-price">Unit Price</p>
                <p className="cart-title-cost">Cost</p>
                {shoppingCart.map((shoppingCartProduct, index) =>
                    <MatchProducts
                        index={index}
                        productId={shoppingCartProduct.itemId}
                        quantity={shoppingCartProduct.quantity}
                        products={products}
                    />
                )}
                <Prices 
                    shoppingCart={shoppingCart}
                    products={products}
                />
            </div>
        )
    if (isOpen && shoppingCart.length == 0)
        return (
            <p className="notification">No items added to cart yet. Start shopping now!</p>
        )
    return null
}

export function MatchProducts({productId, quantity, products}){
    const matchProduct = products.find(product => product.id === productId)
    const nameClass = "cart-product-name";
    const quantityClass = "cart-product-quantity";
    const priceClass = "cart-unit-price";
    const costClass = "cart-cost";
    return (
        <>
            <p className={nameClass}>{matchProduct.name}</p>
            <p className={quantityClass}>{quantity}</p>
            <p className={priceClass}>${matchProduct.price.toFixed(2)}</p>
            <p className={costClass}>${(matchProduct.price * quantity).toFixed(2)}</p>
        </>
    )
}

export function Prices({shoppingCart, products}) {
    let subtotalPrice = shoppingCart.reduce( function (subtotal, shoppingCartProduct) {
        let currentProduct = products.find((product) => product.id === shoppingCartProduct.itemId);
        return subtotal + currentProduct.price*shoppingCartProduct.quantity
    }, 0)
    let taxes = subtotalPrice*0.0875
    let total = subtotalPrice+taxes
    return (
        <>
            <p className="subtotal-title">Subtotal </p>
            <p className="subtotal-price">${subtotalPrice.toFixed(2)}</p>
            <p className="taxes-title">Taxes and fees</p>
            <p className="taxes-price">${taxes.toFixed(2)}</p>
            <p className="total-title">Total</p>
            <p className="total-price">${total.toFixed(2)}</p>
        </>
    )
}