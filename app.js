
const http = require('http')
const url = require('url');
const jwt = require('jsonwebtoken');

let userRoute = require("./routes/userRoute");
let bookRoute = require("./routes/bookRoute");
let movieRoute = require("./routes/movieRoute");
let showRoute = require("./routes/showRoute");
let websiteRoute = require("./routes/websiteRoute");
let adminRoute = require("./routes/adminRoute");

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer();


server.on('request', bodyParser)
function bodyParser(req,res){
    let data = [];

    req.on('data', function (chunk) {
        data += chunk;
        // console.log("1",body)
    });
    req.on('end', function () {
        req.body=JSON.parse(data)
        onRequest(req,res)
    });

}






function onRequest(req, res){
    res.setHeader('Content-Type', 'application/json');
    let pathName = url.parse(req.url).pathname
    let pathname = pathName.split('/');




    if (!pathname[1]){
        res.writeHead(200);
        res.end("welcome to our RESTFull API guide")
    }
    if(pathVariables[1]== "signin"||pathVariables[1]== "signin"){
        if(pathVariables[1]== "signin") adminRoute.signIn(req,res);
        // if(pathVariables[1]== "signup") adminRoute.signUp(req,res);

    else if(pathname [1] == "users"){
     userRoute.userResponse(pathname[2],req,res)
    }
    else if (pathname[1] == "favorites"){
        switch (pathname[2]) {
            case 'books':
                bookRoute.bookResponse(pathname[3],req, res)
                break;
            case 'movies':
                movieRoute.movieResponse(pathname[3],req, res)
                 break;
            case 'shows':
                showRoute.showResponse(pathname[3],req, res)
                break;
            case 'websites':
                websiteRoute.websiteResponse(pathname[3],req, res)
                break
            default:
               errorHandler(res)
        }

    }
    else{
        errorHandler(res)
    }

}
}

function errorHandler(res){
    res.writeHead(404);
    res.end("this page doesn't exist , take a breath and check if u don't have any typos and try again ")
}



server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})