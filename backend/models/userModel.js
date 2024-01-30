const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, 'Name is required'],
        trim: true,
        maxlength: [30, 'User Name musn\'t exceed 30 characters']
    }, 
    email: {
        type: String, 
        required: [true, 'Email cannot be empty'],
        unique: [true, 'E-mail must be unique'],
        validate: [validator.isEmail, 'Invalid Email']
    },
    password: {
        type: String,
        required: [true, 'Password cannot be empty']
    },
    token: String,
    role: {
        type: String,
        enum: ['USER', 'ADMIN'],
        default: 'USER'
    },
    photo: {
        type: String,
        default: 'default.jpg'
    },
},
// timestamps make us trak (createdAt, updatedAt)
{
    timestamps: true
}
);

const User = mongoose.model('User', userSchema);
module.exports = User;