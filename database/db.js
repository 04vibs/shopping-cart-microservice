const Sequelize = require('sequelize');
const db = new Sequelize(
    'shoppingcart',
    'shopuser',
    'root',{
        dialect: 'mysql',
        host: 'localhost',
})


const User = db.define('users',{
    name:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    }
})

const Product = db.define('products',{
    prodCategory:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    prodname:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    prodprice:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    brandname: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    prodcolor: {
        type: Sequelize.STRING,
        allowNull: true,
    }
})

// const Cart = db.define('carts',{
//     quantity: {
//         type: Sequelize.STRING,
//         allowNull: false,
//     }
// })


db.sync({force: false}).then(() => {
    console.log('Database has been synced')
}).catch((err) => {
    console.log(err);
});

module.exports = {
    User,Product
}