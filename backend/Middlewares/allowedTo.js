const AppError = require("../utils/AppError");

module.exports = () => {
    return (req, res, next) => {
        const role = req.currentUser.role;
        if(role !== 'ADMIN') {
            const error = AppError.createError('You are not authorized to use this route', 403, 'fail');
            return next(error);
        }
        next();
    }
}