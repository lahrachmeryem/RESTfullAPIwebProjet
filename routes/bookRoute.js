function bookResponse(id,req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    // res.end(JSON.stringify( {book : "myBook"}));
    // console.log(req.method)
    switch (req.method) {
        case 'GET':
            get(id, req, res);
            break;
        case 'POST':
            addBook(req, res);
            break;
        case 'PUT':
            updateBook(id, req);
            break;
        case 'DELETE':
            deleteBook(id, req);
            break;

    }

    function get(id,req ,res) {
        if(!id) {
            getAllBooks()
        }else{
            getBook(id, req);
        }

    }

    function getAllBooks() {

    }
    function getBook(id,req) {

    }
    function addBook(req,res) {

    }
    function updateBook(id,res,res) {

    }
    function deleteBook(id,req,res) {

    }


}




exports.bookResponse = bookResponse;