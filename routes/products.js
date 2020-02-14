const express = require('express');
const router = express.Router();
const Product = require('../database/db').Product;

   router.get('/', (req,res) => {
        Product.findAll().then((products)=>{
        res.status(200).send(products)
        }).catch((err)=>{
            err;
        })
    })


router.post('/', (req,res) => {
    console.log('Hi products post');
    console.log(req.body.prodname);
    console.log(req.body.prodcolor);
    console.log(req.body.brandname);
    console.log(req.body.prodprice);

    Product.create({
        prodname: req.body.prodname,
        prodprice: req.body.prodprice,
        brandname: req.body.brandname,
        prodcolor: req.body.prodcolor,
        prodCategory: req.body.prodCategory,

    }).then((products)=>{
        console.log('Inside then of products')
        res.status(201).send(products)
    }).catch((error)=>{
        console.log('Inside err of products post');
        res.status(501).send({
            err: 'Could not post due to some issues'
        })
    })
})


router.put('/', (req,res) => {
    console.log('Hi products put');
})


router.delete('/', (req,res) => {
    console.log('Hi products delete');
})

module.exports = router