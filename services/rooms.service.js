const Rooms = require("../models/Rooms");

exports.createRoom = async (detials) => {
    const result = await Rooms.create(detials);
    return result;
}

