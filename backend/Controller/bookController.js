const Book = require('./../models/bookModel');
const asyncWrapper = require('../Middlewares/asyncWrapper');
const AppError = require('../utils/AppError');
const validateObjectId = require('./../utils/validateObjectId');

exports.getAllBooks = asyncWrapper(async (req, res, next) => {
    const query = req.query;
    const limit = query.limit || 10;
    const page = query.page || 1;
    const skip = (page - 1) * limit;
    const books = await Book.find({}, {'__v': false}).limit(limit).skip(skip);

    if(books.length == 0) {
        const error = AppError.createError('No More Books', 404, 'fail');
        return next(error);
    }

    res.status(200).json({
        status: 'success',
        requestedAt : req.requestTime, 
        results: books.length,
        data: {
            books
        }
    });
});

exports.getSingleBook = asyncWrapper(async (req, res, next) => {
    const validation = validateObjectId(req, next);
    if(validation != true) return;
    
    const book = await Book.findById(req.params.id);
    if (book === null) {
        const error = AppError.createError('No Such book', 404, 'fail');
        return next(error);
    }

    res.status(200).json({
        status: 'success',
        requestedAt: req.requestTime,
        results: 1,
        data: {
            book
        }
    });
});

exports.addBook = asyncWrapper(async (req, res) => {
    const newBook = new Book(req.body);
    await newBook.save();
    res.status(200).json({
        status: 'success', 
        requestedAt : req.requestTime, 
        data: newBook
    });
});

exports.updateBook = asyncWrapper(async (req, res, next) => {
    const validation = validateObjectId(req, next);
    if(validation != true) return;

    const book = await Book.findById(req.params.id);
    if(!book) {
        const error = AppError.createError('No such Book', 404, 'fail');
        return next(error);
    }

    const updatedBook = await Book.findByIdAndUpdate(
        req.params.id,
        {$set: {...req.body} },
        {new: true}
    );

    res.status(200).json({
        status: 'success',
        requestedAt : req.requestTime, 
        msg: 'Book Updated Successfully',
        data: {
            updatedBook
        }
    });
});

exports.deleteBook = asyncWrapper(async (req, res, next) => {
    const validation = validateObjectId(req, next);
    if(validation != true) return ;

    await Book.findByIdAndDelete(req.params.id);
    res.status(204).json({
        status: 'success',
        requestedAt : req.requestTime, 
        msg: 'Book has been deleted successfully',
        data: null
    });
});