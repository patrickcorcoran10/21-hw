const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const booksSchema = new Schema({
    title: {
        type: String
    },
    authors: [
        {
        type: String
    }
    ],
    description: {
        type: String
    },
    image: {
        type: String
    }, 
    link: {
        type: String
    }
})

const Books = mongoose.model("Book", booksSchema)
module.exports = Books;