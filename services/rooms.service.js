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

