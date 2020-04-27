const mongoose = require('mongoose');
const User = require('../models/User');


let  connection = mongoose.connect("mongodb://localhost:27017/favApp",{useNewUrlParser: true, useUnifiedTopology: true });
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('were connected')
});

function adminDao() {

}
adminDao.prototype.signIn = function (username,password,callback) {

    User.find({username : username,password:password},function (err,isFound) {
        if(!err){

            if(isFound.length == 0){
                console.log("not found ",username)
            }else {
                console.log("found",username)
            }
            return callback(null,isFound)
        }else{
          return callback(err,null)
        }


    })

}



module.exports = new adminDao();