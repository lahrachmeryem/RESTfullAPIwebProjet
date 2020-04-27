const mongoose = require('mongoose');
const User = require('../models/User');
const querystring = require('querystring');
var url = require('url');


let  connection = mongoose.connect("mongodb://localhost:27017/favApp",{useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

});

function userDao(){

}
userDao.prototype.getAllUsers = function(f){
   User.find({},function (err,docs) {

        if(!err){

            return f(null,docs)
        }else
            return  f(err,null)

    })


}
userDao.prototype.addUser = function(req,f){
    let user ={
        name: req.body.username,
         email:req.body.email,
          password: req.body.password
    }
       User.create(user,function (err,user) {
           if(!err){
               return f(null,user)
           }else{
               return f(err,null)
           }

       })
}

userDao.prototype.getUser = function(id,callback){
    User.findOne({_id : id},function (err,user) {

        if(!err){
            console.log(user)
            return callback(null,user)
        }else
            return callback(err, null)
    })

}
userDao.prototype.updateUser = function(id,req){

    User.updateOne({_id : id},{username : req.body.username, password: req.body.password, email: req.body.email},function (err) {
        if(err){
            return err
        }

    })

}
userDao.prototype.deleteUser = function(id){
    User.deleteOne({_id : id}, function (err) {
        if(err){
            return err
        }

    })

}
module.exports = new userDao();