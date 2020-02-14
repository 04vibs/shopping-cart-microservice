const User = require('../database/db').User;
let login = async (req,res, next) => {
    try{
        User.findAll().then((users)=>{
            res.status(200).send(users)
            }).catch((err)=>{
                err;
            });
    } catch(error){
        next(error);
    }
}

let me = async (req, res, next) => {
    let email = req.body.email;
    try{
        const user = await User.findOne(
            {
                email
            }).select('-password');
        res.send(user);
    } catch(error){
        next(error);
    }
}

let loginUser = async (req,res, next) => {
    console.log('Hi Login post');
    let user = req.body;
    try{
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
    } catch(error){
        next(error);
    }
}

let userSignUp = async(req,res,next)=>{
    let name = req.body.name;
    let password = req.body.password;
    let email = req.body.email;
    try{
        User.create({
            name,
            password,
            email
        }).then((users)=>{
            console.log('Inside then of signup')
            res.status(201).send(users)
        }).catch((error)=>{
            console.log('Inside err of users post');
            res.status(501).send({
                err: 'Could not post due to some issues'
            })
        })
    } catch(error){
        next(error);
    }
}

let resetPassword = async(req, res, next) => {
    console.log('Hi password put');
    const email = req.body.email;
    let password = req.body.password;
    let confirmpassword = req.body.confirmpassword;
    try{
        User.findOne({email: email}).then((users)=>{
            if(!users) {
                 res.send('No result found')
            } else{ 
                
                console.log(confirmpassword);
                console.log(password)
                User.update({
                    password: confirmpassword
                },{
                    where: {
                        email,
                        password
                    }
                }).then(()=>{
                    res.send('updated successfully')
                })            
            }
        })
    } catch(error){
        next(error);
    }
    
}

module.exports = {
    login,
    me,
    loginUser,
    userSignUp,
    resetPassword
}