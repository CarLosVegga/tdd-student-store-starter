import "./ProductGrid.css"
import ProductCard from "../ProductCard/ProductCard"

export default function ProductGrid({products, handleAddItemToCart, handleRemoveItemFromCart, shoppingCart}) {

    return (
        <div className="product-grid">
        {products.map(product => {
            {const shoppingCartProduct = shoppingCart.find(shoppingProduct => shoppingProduct.id === product.id)
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