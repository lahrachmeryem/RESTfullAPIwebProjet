const mongoose = require('mongoose');
const Book = require('../models/Book');


let  connection = mongoose.connect("mongodb://localhost:27017/favApp",{useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('were connected')
});
function getAllBooks() {

}

function getBook(id, req, res) {
     
}
function addBook(req,res) {

}
function updateBook(id, req) {

}
function deleteBook(id, req) {

}