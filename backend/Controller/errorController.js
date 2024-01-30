const sendErrorDev = (err, res) => {
    return res.status(err.statusCode).json({
        status: (err.status), 
        msg: (err.message),
        error: err,
        stack: err.stack
    });
}

const sendErrorProd = (err, res) => {
    res.status(err.statusCode).json({
        status: (err.status), 
        msg: (err.message)
    });
}

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'fail';

    if(process.env.NODE_ENV === 'development') {
        sendErrorDev(err, res);
    }
    else if(process.env.NODE_ENV === 'production') {
        sendErrorProd(err, res);
    }
}