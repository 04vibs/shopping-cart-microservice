const Product = require('../database/db').Product;

let getProductById = async (req,res) => {
    console.log('Hi product-details get');
    let id = req.params.id
    try{
        Product.findOne({
            where: {
                id
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
        });
    } catch(error){
        next(error);
    }

}

let createProduct = async (req, res, next)=>{
    let prodname = req.body.prodname;
    let prodprice = req.body.prodprice;
    let brandname =  req.body.brandname;
    let prodcolor = req.body.prodcolor;
    let prodCategory = req.body.prodCategory;
    try{
        Product.create({
            prodname,
            prodprice,
            brandname,
            prodcolor,
            prodCategory
        }).then((products)=>{
            console.log('Inside then of products')
            res.status(201).send(products)
        }).catch((error)=>{
            console.log('Inside err of products post');
            res.status(501).send({
                err: 'Could not post due to some issues'
            })
        })
    } catch(error){
        next(error);
    }
}

module.exports = {
    getProductById,
    createProduct
}