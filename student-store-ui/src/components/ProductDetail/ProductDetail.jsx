import {useState} from 'react'
import {useParams} from 'react-router-dom'
import { useEffect } from 'react';
import axios from "axios";
import "./ProductDetail.css"
import NotFound from '../NotFound/NotFound';
import ProductView from '../ProductView/ProductView';

export default function ProductDetail({setIsFetching, setError, isFetching, error, handleAddItemToCart, handleRemoveItemFromCart, shoppingCart}) {
    const params = useParams();
    const [product, setProduct] = useState('')
    const productURL = `https://codepath-store-api.herokuapp.com/store/${params.productId}`

    useEffect(() => {
        async function fetchProductData() {
            setIsFetching(true)
            const { data } = await axios(productURL).catch((err)=>{
                setError(err)
            })
        setProduct(data.product)
        setIsFetching(false)
        }
        fetchProductData();
    }, [])
    if (isFetching)
        return <h1 className="loading">Loading...</h1>
    if (error)
        return <NotFound/>

    // Find the quantity for an specific product
    const shoppingCartProduct = shoppingCart.find(shoppingProduct => shoppingProduct.itemId === product.id)
    const quantity = !shoppingCartProduct?0:shoppingCartProduct.quantity
    
    return (
        <div className="product-detail">
            <ProductView
                product={product}
                productId={product.id}
                handleAddItemToCart={handleAddItemToCart}
                handleRemoveItemFromCart={handleRemoveItemFromCart}
                quantity={quantity}
            />
        </div>
    )
}