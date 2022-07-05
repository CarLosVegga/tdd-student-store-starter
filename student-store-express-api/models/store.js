const { param } = require("../app");
const {storage} = require("../data/storage")

class Store {
    constructor(){}
    static getProducts() {
        console.log(storage.products)
        return storage.get('products').value();
    }
    static getProduct(productId) {
        return storage.get('products').find(item => item.id == productId).value()
    }
    static createPurchase(order) {
        let receipt = []
        let products = storage.get('products').value()
        // receipt.push((`Showing receipt for ${order.user.name} available at ${order.user.email}`))
        // (order.shoppingCart).map((shoppingCartProduct, index) => {
        //     let currentProduct = products.find((product) => product.id === shoppingCartProduct.itemId);
        //     receipt.push(`${shoppingCartProduct.quantity} total ${currentProduct.name} purchased at a cost of $${currentProduct.price.toFixed(2)} for a total cost of $${(shoppingCartProduct.quantity*currentProduct.price).toFixed(2)}.`)
        // })
        let subtotalPrice = order.shoppingCart.reduce( function (subtotal, shoppingCartProduct) {
            let currentProduct = products.find((product) => product.id === shoppingCartProduct.itemId);
            return subtotal + currentProduct.price*shoppingCartProduct.quantity
        }, 0)
        receipt.push(`Before taxes, the subtotal was $${subtotalPrice.toFixed(2)}`)
        let taxes = subtotalPrice*0.0875
        let total = subtotalPrice+taxes
        receipt.push(`After taxes and fees were applied, the total comes out to $${total.toFixed(2)}`)
        let newPurchase = {
            "id": (storage.get('purchases')).value().length + 1,
            "name": order.user.name,
            "email": order.user.email,
            "order": order.shoppingCart,
            "total": total.toFixed(2),
            "createAt": new Date(),
            "receipt": receipt
        }
        storage.get('purchases').push(newPurchase).write()
        return newPurchase
    }
}

module.exports = Store