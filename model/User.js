const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        isAdmin: {
            type: Boolean,
            required: true,
            default: false
        },
        phoneNumber: {
            type: Integer,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        passport_id: {
            type: String,
            required: true
        },
        refreshToken: String
    },
    {
        timestamps: true
    }
);

// all of our users now have a method called matchPassword that will compare the entered password with the hashed password in the database
userSchema.methods.matchPassword = async (enteredPassword) => { return await bcrypt.compare(enteredPassword, this.password) }

// middleware to hash password before saving to database
userSchema.pre('save', async (next) => {
    // only hash password if it has been modified (or is new)
    if (!this.isModified('password')) { next() }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
});

module.exports = mongoose.model('User', userSchema);