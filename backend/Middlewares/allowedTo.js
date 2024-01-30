const AppError = require("../utils/AppError");

module.exports = (...roles) => {
    // console.log('roles', roles);
    return (req, res, next) => {
        const role = req.currentUser.role;
        if(role !== 'ADMIN') {
            // console.log('Not Admin');
            const error = AppError.createError('You are not authorized to use this route', 403, 'fail');
            return next(error);
        }
        next();
    }
}