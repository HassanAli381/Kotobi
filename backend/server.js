const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});

const usersRoutes = require('./Routes/usersRoutes');
const booksRoutes = require('./Routes/BooksRoutes');
const AppError = require('./utils/AppError');
const errorController = require('./Controller/errorController');


process.on('uncaughtException', err => {
    console.error('uncaughtException Errors', err.name, err.message);
    console.error('Shutting down the server...');
    process.exit(1);
});
const app = express();

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('DB Connection Successfull'))
.catch(err => console.log('Could not connect to DB', err));

// body barser middleware to make us able to parse the incoming req.body
// body barser is a tool that helps the server understand and process the data that comes with the req it recives
//req is recived as a string, this Middleware convert it to json.
app.use(express.json());

app.use(cors());

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});

app.use('/api/user', usersRoutes);
app.use('/api/books', booksRoutes);

// global middleware for not found routes
app.all('*', (req, res, next) => {
    const error = AppError.createError(`Route ${req.originalUrl} is not found in the server`, 404, 'error');
    return next(error);
});

// global error handler (any error insde the application will go through it).
app.use(errorController);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`Listening on port ${port} ..`);
});

process.on('unhandledRejection', (err) => {
    console.error('unhandledRejection Errors', err);
    server.close(() => {
        console.error('Shutting down the server...');
        process.exit(1);
    });
});
