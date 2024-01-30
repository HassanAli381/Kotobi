const express = require('express');
const router = express.Router();
const booksController = require('./../Controller/bookController');
const { verify } = require('../Middlewares/verifyToken');
const allowedTo = require('./../Middlewares/allowedTo');

router.route('/')
    .get(booksController.getAllBooks)
    .post(booksController.addBook);

router.route('/:id')
    .get(booksController.getSingleBook)
    .patch(booksController.updateBook)
    .delete(verify, allowedTo('ADMIN') ,booksController.deleteBook);

module.exports = router;