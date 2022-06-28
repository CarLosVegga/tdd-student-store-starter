import "./ProductCard.css"
import {Link} from 'react-router-dom'

export default function ProductCard({product, productId, showDescription, handleRemoveItemFromCart, handleAddItemToCart, quantity}) {
    return(
        <>        
        {/* Changing convention because of the automated tests! */}
            <div className="product-card" key={productId}>
                <div className="media">
                    <Link to={"/products/" + productId}>
                        <img src={product.image} alt="Photo for ${product.name}" />
                    </Link>
                </div>
                <div className="product-name">
                    <button onClick={() => handleRemoveItemFromCart(productId)} className="remove">-</button>
                    {product.name}
                    <button onClick={() => handleAddItemToCart(productId)} className="add">+</button>
                </div>
                <Quantity quantity={quantity}/>
                <div className="product-price">
                    <p className="price">${product?.price?.toFixed(2)}</p>
                </div>
                {showDescription
                    ?<div className="product-description">
                        <p className="description">{product.description}</p>
                    </div>
                    :null
                }
            </div>
        </>
    )
}

export function Quantity({quantity}){
    if (!quantity){
        return null
    } 
    else {
        return <div className="product-quantity">{quantity}</div>
    }
}