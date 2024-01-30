const bcrypt = require('bcrypt');
const User = require('./../models/userModel');
const generateJWT = require('../utils/generateJWT');
const asyncWrapper = require('../Middlewares/asyncWrapper');
const AppError = require('../utils/AppError');

exports.getAllUsers = asyncWrapper( async(req, res) => {
    const users = await User.find({}, {"__v": false, 'password': false});
    res.status(200).json({
        status: 'success',
        requestedAt: req.requestTime,
        results: users.length,
        data: {
            users
        }
    });
});

exports.register = asyncWrapper(async (req, res, next) => {
    const user = await User.findOne({email: req.body.email});
    if(user) {
        const error = AppError.createError('User already exists', 400, 'fail');
        return next(error);
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 8);
    req.body.password = hashedPassword;
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    console.log('newUser', newUser);

    const token = await generateJWT({email: newUser.email, id: newUser._id, role: newUser.role});
    newUser.token = token; 
    await newUser.save();
    res.status(200).json({
        status: 'success', 
        time: req.requestTime,
        data: {
            newUser
        }
    });
});

exports.login = asyncWrapper(async (req, res, next) => {
    const {email, password} = req.body;
    if(!email || !password) {
        const error = AppError.createError('Email and password are required!', 400, 'fail');
        return next(error);
    }

    const user = await User.findOne({email: email});
    if(!user || !(await bcrypt.compare(password, user.password))) {
        const error = AppError.createError('Incorrect email or password!', 401, 'fail');
        return next(error);
    }

    // log in
    const token = await generateJWT({email: user.email, id: user._id, role: user.role});
    res.status(200).json({
        status: 'success',
        msg: 'Logged in successfully',
        data: {
            token
        }
    });
});