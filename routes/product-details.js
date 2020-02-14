const express = require('express');
const router = express.Router();
const Product = require('../database/db').Product;

router.get('/:id', (req,res) => {
    console.log('Hi product-details get');
    let id = req.params.id
    Product.findOne({
        where: {
            id: req.params.id
        }
    }).then((productdetails) => {
        if(!productdetails) {
            res.send("No Such id exist")
        } else {
            console.log(productdetails)
            res.send(productdetails);
        }
    }).catch((err)=>{
        res.send("Invalid product id")
    })

})


router.post('/', (req,res) => {
    console.log('Hi product-details post');
})


router.put('/', (req,res) => {
    console.log('Hi product-details put');
})


router.delete('/', (req,res) => {
    console.log('Hi product-details delete');
})

module.exports = router