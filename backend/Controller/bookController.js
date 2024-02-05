const Book = require('./../models/bookModel');
const asyncWrapper = require('../Middlewares/asyncWrapper');
const AppError = require('../utils/AppError');
const validateObjectId = require('./../utils/validateObjectId');

const multer = require('multer');

const multerStorage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, `${__dirname}/../../frontend/img`);
    },
    filename: (req, file, cb) => {
        const ext = file.mimetype.split('/')[1];
        cb(null, `user-${req.currentUser.id}-${Date.now()}.${ext}`);
    }
});

const multerFilter = (req, file, cb) => {
    if(file.mimetype.startsWith('image')) {
        cb(null, true);
    }
    else {
        cb(AppError.createError('This field accepts only images', 400, 'fail '), false);
    }
}

const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter
});

exports.uploadBookPhoto = upload.single('photo');


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
    if(req.file)
        newBook.photo = req.file.filename;
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

    if(req.file){
        updatedBook.photo = req.file.filename;
        await updatedBook.save();
    }

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