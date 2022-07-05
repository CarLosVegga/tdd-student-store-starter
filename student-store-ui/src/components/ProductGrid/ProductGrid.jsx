import "./ProductGrid.css"
import ProductCard from "../ProductCard/ProductCard"

export default function ProductGrid({products, handleAddItemToCart, handleRemoveItemFromCart, shoppingCart, isFetching}) {
    if (isFetching)
        return <h1 className="loading">Loading...</h1>
    return (
        <div className="product-grid">
        {products.map(product => {
            {const shoppingCartProduct = shoppingCart.find(shoppingProduct => shoppingProduct.itemId === product.id)
            const quantity = !shoppingCartProduct?0:shoppingCartProduct.quantity
            return <ProductCard 
                handleAddItemToCart={handleAddItemToCart}
                handleRemoveItemFromCart={handleRemoveItemFromCart}
                showDescription={false}
                product={product}
                quantity={quantity}            
                productId={product.id}
            />
            }
        })}
        </div>
    )
}