const mongoose = require("mongoose");
const validator = require('validator');


const RoomsSchema = mongoose.Schema({
    size: {
        type: String,
        required: true,

    },

    price: {
        type: Number,
        required: true,

    },
    description: {
        type: String,
        required: true,
    },
    discount: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        validate: {
            validator: (value) => validator.isURL(value, { protocols: ['http', 'https'], require_tld: true, require_protocol: true }),
            message: 'Invalid image URL',
        },
    },
    totalSeat: {
        type: Number,
        required: true,
    },




    review: {
        type: Array,
    },
    status: {
        type: Boolean,
        default: true,
    },
    bookingDate: [{
        email: {
            type: String,
            default: '',
        },
        bookingSeat: {
            type: Number,
            default: 0,

        },
        status: {
            type: Boolean,
            default: false,
        },
        date: {
            type: Date,
            default: '',
        }
    }],



}, {
    timestamps: true,
})

const Rooms = mongoose.model('Rooms', RoomsSchema);
module.exports = Rooms;