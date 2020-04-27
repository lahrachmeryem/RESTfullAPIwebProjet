const  mongoose  = require('mongoose');

const bookSchema = {
    id : {
        type : String,
        auto : true
    },
    title : String,
    author : String,
    year : Number,
    genre : String
};

const Book = mongoose.model('Book', bookSchema);
module.exports  = Book;