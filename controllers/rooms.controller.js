const { createRoom, getAllRooms, findRoomById, findRoomByIdandMakeOrder, fingRoomandCreateFeadback, findRoomandCreateFeadback, createNewRoomOrder } = require("../services/rooms.service");

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
exports.getSingleRooms = async (req, res) => {
    try {

        const { roomId } = req.params;
        console.log(roomId);
        const result = await findRoomById(roomId)
        res.status(200).json({
            status: "success",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            error: "Couldn't get the donor",
        });
    }
}
exports.putNewOrder = async (req, res) => {
    try {
        // console.log(req.body);
        const { roomId } = req.params;
        // console.log(roomId);
        const result = await findRoomByIdandMakeOrder(roomId, req.body)
        res.status(200).json({
            status: "success",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            error: "Couldn't get the donor",
        });
    }
}

exports.getRooms = async (req, res) => {
    try {
        // console.log(req.query);
        let filters = { ...req.query }
        const excludeFields = ["limit", "sort", "page", "fields"]
        excludeFields.forEach(field => delete filters[field])


        const queries = {};
        // separate sort and make fit for data query 
        if (req.query.sort) {
            const sortBy = req.query.sort.split(',').join(' ')
            queries.sortBy = sortBy;
        }

        // load specific property and value ( fields)
        if (req.query.fields) {
            const fields = req.query.fields.split(',').join(' ');
            queries.fields = fields;

        }
        // pagination 
        if (req.query.page) {
            const { page = 1, limit = 3 } = req.query;
            const skip = (page - 1) * parseInt(limit);
            queries.skip = skip;
            queries.limit = limit;
        }

        const allRooms = await getAllRooms(filters, queries);
        // console.log(allRooms);
        res.status(200).json({
            status: "success",
            data: allRooms
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            error: "Couldn't get the Rooms",
        });
    }
}
// new order 
exports.postNewOrder = async (req, res) => {
    try {
        console.log(req.body);
        // console.log(req.body);
        const createdRoom = await createNewRoomOrder(req.body);
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
exports.createFeadback = async (req, res) => {
    try {
        const { roomId } = req.params;
        // console.log(req.body);
        const createdRoom = await findRoomandCreateFeadback(roomId, req.body);
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






