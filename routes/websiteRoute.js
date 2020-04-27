function websiteResponse(id,req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    // res.end(JSON.stringify( {Website : "myWebsite"}));
    // console.log(req.method)
    switch (req.method) {
        case 'GET':
            get(id, req, res);
            break;
        case 'POST':
            addWebsite(req, res);
            break;
        case 'PUT':
            updateWebsite(id, req);
            break;
        case 'DELETE':
            deleteWebsite(id, req);
            break;

    }

    function get(id,req ,res) {
        if(!id) {
            getAllWebsites()
        }else{
            getWebsite(id, req);
        }

    }

    function getAllWebsites() {

    }
    function getWebsite(id,req) {

    }
    function addWebsite(req,res) {

    }
    function updateWebsite(id,res,res) {

    }
    function deleteWebsite(id,req,res) {

    }


}




exports.websiteResponse = websiteResponse;