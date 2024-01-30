const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Book Name is required'],
        trim: true,
        max_length: [30, `Book name musn't exceed 30 characters`]
    },
    price: {
        type: Number,
        required: [true, 'Book\'s price is required']
    },
    photo: {
        type: String,
        default: 'book2.jpg'
    },
    description: {
        type: String, 
        min_length: [5, 'Book\'s description must have length greater than 5 characters']
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        trim: true
    }
},
{
    timestamps: true
}
);

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;