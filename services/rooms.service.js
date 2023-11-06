const Rooms = require("../models/Rooms");

exports.createRoom = async (detials) => {
    const result = await Rooms.create(detials);
    return result;
}

exports.getAllRooms = async (filters, queries) => {
    console.log(queries);
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

exports.findRoomByIdandMakeOrder = async (id, orders) => {
    const result = await Rooms.updateOne({ _id: id }, { $set: { bookingDate: orders } });
    console.log(result);
    return result;
}
exports.findRoomandCreateFeadback = async (id, feadback) => {
    const result = await Rooms.updateOne({ _id: id }, { $push: { review: feadback } });
    return result;
}
exports.createNewRoomOrder = async (order) => {
    console.log(order);
    // const result = await Rooms.updateOne({ _id: id }, { $push: { review: feadback } });
    console.log(result);
    // return result;
}