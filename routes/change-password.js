// const express = require('express');
// const router = express.Router();
// const User = require('../database/db').User;

// router.get('/', (req,res) => {
//     console.log('change-password-get')
//     })

// router.post('/', (req,res) => {
//     console.log('Hi change-password post');
// })

// router.put('/', (req,res) => {
//     console.log('Hi password put');
//     const email = req.body.email;
//     User.findOne({email: email}).then((users)=>{
//         console.log(users)
//         if(!users) {
//              res.send('No result found')
//         } else{ 
//             console.log(users)
//             let password = req.body.password;
//             let confirmpassword = req.body.confirmpassword;
//             console.log(confirmpassword);
//             console.log(password)
//             User.update({
//                 password: req.body.confirmpassword
//             },{
//                 where: {
//                     email: req.body.email,
//                     password: req.body.password
//                 }
//             }).then(()=>{
//                 res.send('updated successfully')
//             })            
//         }
//     })
// })

// router.delete('/', (req,res) => {
//     console.log('Hi Login delete');
// })

// module.exports = router