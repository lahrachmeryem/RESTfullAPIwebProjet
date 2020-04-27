function movieResponse(id,req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    // res.end(JSON.stringify( {movie : "mymovie"}));
    // console.log(req.method)
    switch (req.method) {
        case 'GET':
            get(id, req, res);
            break;
        case 'POST':
            addMovie(req, res);
            break;
        case 'PUT':
            updateMovie(id, req);
            break;
        case 'DELETE':
            deleteMovie(id, req);
            break;

    }

    function get(id,req ,res) {
        if(!id) {
            getAllMovies()
        }else{
            getMovie(id, req);
        }

    }

    function getAllMovies() {

    }
    function getMovie(id,req) {

    }
    function addMovie(req,res) {

    }
    function updateMovie(id,res,res) {

    }
    function deleteMovie(id,req,res) {

    }


}




exports.movieResponse = movieResponse;