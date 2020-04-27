 const dao = require ('../DAO/userDAO.js')

function userResponse (id,req, res,body) {

 switch (req.method) {
  case 'GET':
   get(id, res);
   break;
  case 'POST':
   addUser(req, res);
   break;
  case 'PUT':
   updateUser(id, req,res);
   break;
  case 'DELETE':
   deleteUser(id, req,res);
   break;
 }

 function get(id,res) {
  if(!id) {
   getAllUsers(res)
  }else{
   getUser(id,res);
  }

 }
 
 function getAllUsers(res) {
   dao.getAllUsers(function (err,users) {
     if(err){

      res.end(err)
     }else {
      res.writeHead(200);
      res.end(JSON.stringify(users))
     }

   })

 }
 function getUser(id,res) {

  let user = dao.getUser(id, function (err, user) {
   if (!err) {
    res.writeHead(200);
    res.end(JSON.stringify(user))

   } else {
    res.end("can't get this user",err)
   }
  })
 }

function addUser(req,res) {
  dao.addUser(req,function (err,user) {
    if(!err){
     res.writeHead(200);
     res.end("this user is successfull added");
    }else{
     res.end("sorry can't add this user",err)
    }
  });


}
function updateUser(id,req,res) {
 dao.updateUser(id,req);
 res.writeHead(200);
 res.end("user updated")

}

function deleteUser(id,req,res) {
 dao.deleteUser(id)
 res.writeHead(200);
 res.end("user deleted")

}


}
 exports.userResponse= userResponse;




