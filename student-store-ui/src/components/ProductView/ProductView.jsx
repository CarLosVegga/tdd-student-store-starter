import ProductCard from "../ProductCard/ProductCard";


export default function ProductView({product, productId, handleAddItemToCart, handleRemoveItemFromCart, quantity}){
    
    return (<div className="product-view">
        <h1 className="product-id">Product #{productId}</h1>
        <ProductCard
            product={product}
            productId={productId} 
            showDescription={true} 
            handleRemoveItemFromCart={handleRemoveItemFromCart} 
            handleAddItemToCart={handleAddItemToCart} 
            quantity={quantity}
        />
         {/* It should display an h1 element with the className of product-id that contains the text: Product # followed by the productId prop
        It should render a ProductCard component and pass it the props it needs. It should also set the showDescription prop to true for this product card. */}
    </div>
    )
}