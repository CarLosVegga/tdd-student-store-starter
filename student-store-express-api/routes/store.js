const express = require('express');
const Store = require('../models/store.js');
const router = express.Router();
// const { BadRequestError } = require('../utils/errors');
// const storeObj = new Store()

router.get('/', (req, res, next) => {
    try {
        res.status(200).send({"products": Store.getProducts()})
    } catch(e) {
        res.status(400).send(e)
    }
})

router.get("/:productId", (req, res, next) => {
    const productId = req.params.productId
    try {
        res.status(200).send({"product": Store.getProduct(productId)})
    } catch(e) {
        res.status(400).send(e)
    }
})

router.post("/", (req, res, next) => {
    const purchase = req.body
    if (!purchase.user || purchase.user.length === 0) {
        res.status(400).send({"error": "Missing user value"})
    }
    else if (!purchase.shoppingCart || purchase.shoppingCart.length === 0) {
        res.status(400).send({"error": "Missing shopping Cart"})
    }
    else {
        let hasCorrectFormat = (purchase.shoppingCart).reduce( function (hasCorrectFormat, shoppingCartProduct) {
            if (!shoppingCartProduct.itemId || !shoppingCartProduct.quantity){
                return false;
            }
            return hasCorrectFormat
        })
        if (hasCorrectFormat){
            res.status(201).send({"purchase": Store.createPurchase(req.body)})
        }
        else
            res.status(500).send({"error": "Missing values in Shopping Cart"})
        next()
    }
})

module.exports = router