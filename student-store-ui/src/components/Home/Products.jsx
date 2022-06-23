import "./Products.css"

export default function App({products}) {
    console.log(products)
    return (
       createProductsGrid(products)
    )
}

export function createProductsGrid(products) {
    return(
    <div id="productGrid">
    {products.map(product => 
        <div className="productCard" key={product.id}>
            <img src={product.image} alt="Photo for ${product.name}" />
            <div className="order">
                <button className="decrease">-</button>
                {product.name}
                <button className="increase">+</button>
            </div>
            <div className="info">
                <p className="price">${product.price}</p>
                <p className="description">{product.description}</p>
            </div>
        </div>)}
    </div>
    )
}