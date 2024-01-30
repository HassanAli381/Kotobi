const fs = require('fs');
const express = require('express');
const mongoose = require('mongoose');
const Book = require('./../models/bookModel');
const dotenv = require('dotenv');
dotenv.config({path: './../config.env'});


mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('DB Connection Successfull'))
.catch(err => console.log('Could not connect to DB', err));

const books = JSON.parse(fs.readFileSync('./books.json', 'utf-8'));

const importData = async() => {
    try {
        await Book.create(books);
        console.log('Data successfully loaded!');
    }
    catch(err) {
        console.log(err);
    }
}

const deleteData = async() => {
    try { 
        await Book.deleteMany();
        console.log('Data successfully deleted!');
    }
    catch(err) {
        console.log(err);
    }
}

if(process.argv[2] === '--import') {
    importData();
}
else if(process.argv[1] === '--delete') {
    deleteData();
}