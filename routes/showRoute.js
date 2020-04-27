function showResponse(id,req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    // res.end(JSON.stringify( {Show : "myShow"}));
    // console.log(req.method)
    switch (req.method) {
        case 'GET':
            get(id, req, res);
            break;
        case 'POST':
            addShow(req, res);
            break;
        case 'PUT':
            updateShow(id, req);
            break;
        case 'DELETE':
            deleteShow(id, req);
            break;

    }

    function get(id,req ,res) {
        if(!id) {
            getAllShows()
        }else{
            getShow(id, req);
        }

    }

    function getAllShows() {

    }
    function getShow(id,req) {

    }
    function addShow(req,res) {

    }
    function updateShow(id,res,res) {

    }
    function deleteShow(id,req,res) {

    }


}




exports.showResponse = showResponse;