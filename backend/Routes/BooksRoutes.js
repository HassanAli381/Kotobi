const express = require('express');
const router = express.Router();
const booksController = require('./../Controller/bookController');
const { verify } = require('../Middlewares/verifyToken');
const allowedTo = require('./../Middlewares/allowedTo');

router.route('/')
    .get(booksController.getAllBooks)
    .post(verify, allowedTo(), booksController.uploadBookPhoto, booksController.addBook);

router.route('/:id')
    .get(booksController.getSingleBook)
    .patch(verify, allowedTo(), booksController.uploadBookPhoto, booksController.updateBook)
    .delete(verify, allowedTo(), booksController.deleteBook);

module.exports = router;