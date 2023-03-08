const mongoose = require('mongoose');

/* 
user
car
status
*/
const requestSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        car: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Car'
        },
        // requested, approved, completed, cancelled
        status: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Request', requestSchema);