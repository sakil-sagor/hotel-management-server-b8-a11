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

    review: {
        type: Array,
    },
    status: {
        type: Boolean,
        default: true,
    },
    description: {
        type: String,
        required: true,
    },

    discount: {
        type: String,
        required: true,
    },

    bookingDate: {
        status: {
            type: Boolean,
            default: false,
        },
        date: {
            type: Date,
            default: Date.now,
        }

    },
    image: {
        type: String,
        validate: {
            validator: (value) => validator.isURL(value, { protocols: ['http', 'https'], require_tld: true, require_protocol: true }),
            message: 'Invalid image URL',
        },
    },


}, {
    timestamps: true,
})

const Rooms = mongoose.model('Rooms', RoomsSchema);
module.exports = Rooms;