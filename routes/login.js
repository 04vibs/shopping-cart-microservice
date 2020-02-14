const express = require('express');
const router = express.Router();
const User = require('../database/db').User;

router.get('/', (req,res) => {
        User.findAll().then((users)=>{
        res.status(200).send(users)
        }).catch((err)=>{
            err;
        })
    })

router.get('/me', async (req, res) => {
    const user = await User.findOne(
        {
        email: req.body.email
        }).select('-password');
    res.send(user);
    });
    

router.post('/', (req,res) => {
    console.log('Hi Login post');
    user = req.body;
    User.findAll().then((users)=>{
        console.log('Inside post login');
        index = users.findIndex(x=> x.email === user.email && x.password === user.password );
        res.status(200).send({
            id: users[index].id,
            email: users[index].email
        }).catch((err)=>{
            console.log(err);
        })
    })
})

router.put('/', (req,res) => {
    console.log('Hi Login put');
})

router.delete('/', (req,res) => {
    console.log('Hi Login delete');
})

module.exports = router