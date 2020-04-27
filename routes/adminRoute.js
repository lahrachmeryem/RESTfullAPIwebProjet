let adminDAO = require("../DAO/adminDAO");
let jwt = require('jsonwebtoken');


function signIn(req,res) {
    let token;
    let username =req.body.username;
    let password = req.body.password;

     adminDAO.signIn(username,password,function (err,isFound) {
         console.log("hi")
                 if (isFound.length !== 0) {
                     token = jwt.sign({username}, 'mimiPrivateKey');
                     console.log(token)
                     res.setHeader('token', token);
                     res.writeHead(200);
                     res.end("Successfully logged in")
                 } else {
                     res.writeHead(200);
                     res.end("Username or password incorrect, please try again");



                 }

     })


}
exports.signIn = signIn;