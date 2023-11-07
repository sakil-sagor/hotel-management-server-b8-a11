const Rooms = require("../models/Rooms");

exports.createRoom = async (detials) => {
    const result = await Rooms.create(detials);
    return result;
}

exports.getAllRooms = async (filters, queries) => {
    const result = await Rooms
        .find(filters)
        .skip(queries.skip)
        .limit(queries.limit)
        .sort(queries.sortBy)
    const totalRoom = await Rooms.countDocuments(filters);
    const pageCount = Math.ceil(totalRoom / queries.limit)
    return { result, totalRoom, pageCount };
}


exports.findRoomById = async (detials) => {
    const singleroom = await Rooms.findOne({ _id: detials });
    return singleroom;
}
// make order 
exports.findRoomByIdandMakeOrder = async (id, orders) => {
    const result = await Rooms.updateOne({ _id: id }, { $push: { bookingDate: orders } });
    return result;
}
// create feadback 
exports.findRoomandCreateFeadback = async (id, feadback) => {
    const result = await Rooms.updateOne({ _id: id }, { $push: { review: feadback } });
    return result;
}


exports.findAllBookingByEmail = async (userEmail) => {
    const rooms = await Rooms.find();
    const bookingRooms = []
    rooms?.forEach((object) => {
        const image = { image: object?.image };
        const price = { price: object?.price }
        const productId = { productId: object._id }
        object.bookingDate.forEach((item) => {
            if (item.email === userEmail) {
                const newObject = { ...image, ...price, ...productId, item }
                bookingRooms.push(newObject)
            }
        });
    });

    return bookingRooms;
}

exports.findidandUpdateBooking = async (email, updateData) => {
    const dateObject = new Date(updateData?.date);
    const newEmail = email.email;
    const result = await Rooms.findOneAndUpdate(
        {
            _id: updateData?.productId,
            'bookingDate.email': newEmail
        },
        { $set: { 'bookingDate.$.date': dateObject } },
        { new: true },
    )
    return result;
}

exports.findSingleBookByIdAndEmail = async (productId, orderId) => {
    const result = await Rooms.findOneAndUpdate(
        { _id: productId },
        { $pull: { bookingDate: { _id: orderId } } },
        { new: true },
    );
    return result;
}

