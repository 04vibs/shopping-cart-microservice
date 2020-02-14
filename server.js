const express = require('express');
const app = express();

const login = require('./routes/login');
const signup = require('./routes/signup');
const products = require('./routes/products');
const productdetails = require('./routes/product-details');
const changepassword = require('./routes/change-password');

// const routes = {
//   login: require('./routes/login'),
//   products: require('./routes/products'),
//   signup: require('./routes/signup'),
//   productdetails: require('./routes/product-details')
// }


app.use(express.json());
app.use(express.urlencoded({
  extended : true
}));
app.use('/login', login)
app.use('/products', products)
app.use('/signup', signup)
app.use('/productdetails', productdetails)
app.use('/changepassword',changepassword)


const port = process.env.PORT ||3000;
app.listen(port,()=>{
    console.log(`listening port ${port}`);
})
