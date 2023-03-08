const mongoose = require('mongoose');

const carSchema = mongoose.Schema(
    {
        price: {
            type: Number,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        stock: {
            type: Number,
            required: true
        },
        available: {
            type: Boolean,
            required: true,
        },
        valid: {
            type: Boolean,
            required: true,
        },
        year: {
            type: Number,
            required: true
        },
        model: {
            type: String,
            required: true
        },
        brand: {
            type: String,
            required: true
        },
        specs: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Car', carSchema);