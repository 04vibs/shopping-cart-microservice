const userController = require('../controller/userController');

module.exports = (app) =>{
    app.get('/', userController.login),
    app.get('/me', userController.me),
    app.post('/', userController.loginUser),
    app.post('/signUp', userController.userSignUp);
    app.put('/resetPassword', userController.resetPassword);
}

    

// router.post('/', )

// router.put('/', (req,res) => {
//     console.log('Hi Login put');
// })

// router.delete('/', (req,res) => {
//     console.log('Hi Login delete');
// })