const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');

module.exports = (app)=>{
    app.get('/:id',productController.getProductById);
    app.post('/newProduct', productController.createProduct);
};


// router.post('/', (req,res) => {
//     console.log('Hi product-details post');
// })


// router.put('/', (req,res) => {
//     console.log('Hi product-details put');
// })


// router.delete('/', (req,res) => {
//     console.log('Hi product-details delete');
// })

// module.exports = router