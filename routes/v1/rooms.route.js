const express = require('express');
const roomsController = require('../../controllers/rooms.controller');
const router = express.Router();



router.route('/all')
    .get(roomsController.getRooms)

router.route('/all/:roomId')
    .get(roomsController.getSingleRooms)
    .put(roomsController.putNewOrder)

router.route('/addrooms')
    .post(roomsController.createRooms)





module.exports = router;