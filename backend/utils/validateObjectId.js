const mongoose = require('mongoose');
const AppError = require('./AppError');

const validateObjectId = (req, next) => {
    if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
        const error = AppError.createError('Invalid Object Id', 400, 'fail');
        return next(error);
    }
    return true;
}

module.exports = validateObjectId;