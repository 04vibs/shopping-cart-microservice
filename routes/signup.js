const express = require('express');
const router = express.Router();
const User = require('../database/db').User;

router.get('/', (req,res) => {
    console.log('Hi signup get');
    res.send('Hi signup get')
})


router.post('/', (req,res) => {
    console.log('Hi signup post');
    console.log(req.body.name);
    console.log(req.body.password);
    console.log(req.body.email);

    User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
    }).then((users)=>{
        console.log('Inside then of signup')
        res.status(201).send(users)
    }).catch((error)=>{
        console.log('Inside err of users post');
        res.status(501).send({
            err: 'Could not post due to some issues'
        })
    })
})


router.put('/', (req,res) => {
    console.log('Hi signup put');
})


router.delete('/', (req,res) => {
    console.log('Hi signup delete');
})

module.exports = router