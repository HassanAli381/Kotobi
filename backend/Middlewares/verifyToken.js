const jwt = require('jsonwebtoken');
const AppError = require('../utils/AppError');
const User = require('../models/userModel');
const asyncWrapper = require('./asyncWrapper');

exports.verify = asyncWrapper(async(req, res, next) => {
    const authHeader = req.headers['Authorization'] || req.headers['authorization'];
    if(!authHeader || !(req.headers.authorization.startsWith('Bearer'))) {
        const error = AppError.createError('You must be authorized to be able to access the route', 401, 'fail');
        return next(error);
    }

    const token = authHeader.split(' ')[1];
    try{
        const currentUser = jwt.verify(token, process.env.JWT_SECRET_KEY);

        // @description Check if user still exists not have been deleted!
        const userEmail = currentUser.email;
        const user = await User.findOne({email: userEmail});
        if(!user) {
            const error = AppError.createError('Token Bearer has been deleted or not existed!', 401, 'fail');
            return next(error);
        }

        req.currentUser = currentUser;
    }
    catch(err) {
        const error = AppError.createError('Invalid Token', 401, 'fail');
        return next(error);
    }
    next();
});