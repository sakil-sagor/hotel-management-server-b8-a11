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
    const result = await Rooms.updateOne({ _id: id }, { $set: { bookingDate: orders } });
    return result;
}
// create feadback 
exports.findRoomandCreateFeadback = async (id, feadback) => {
    const result = await Rooms.updateOne({ _id: id }, { $push: { review: feadback } });
    return result;
}

exports.findAllBookingByEmail = async (userEmail) => {
    const result = await Rooms.find({ 'bookingDate.email': userEmail });
    return result;
}
exports.findSingleBookByIdAndEmail = async (id, userEmail) => {
    const bookingDate = {
        date: '',
        email: '',
        status: false,
    }
    const result = await Rooms.updateOne({ _id: id }, { $set: { bookingDate: bookingDate } });
    console.log(result);
    return result;
}

