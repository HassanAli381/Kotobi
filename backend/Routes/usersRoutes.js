const express = require('express');
const router = express.Router();
const userController = require('./../Controller/userController');
const { verify }  = require('../Middlewares/verifyToken');

router.route('/').get(verify ,userController.getAllUsers);
router.route('/register').post(userController.register);
router.route('/login').post(userController.login);

module.exports = router;