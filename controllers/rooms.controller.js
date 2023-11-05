const { createRoom } = require("../services/rooms.service");


exports.createRooms = async (req, res) => {
    try {
        console.log(req.body);
        const createdRoom = await createRoom(req.body);
        res.status(200).json({
            status: "success",
            message: "Successfully Added rooms detials",
        })
    } catch (error) {
        res.status(500).json({
            status: "fail",
            message: "Couldn't create room",
            error: error.message,
        });
    }


}







