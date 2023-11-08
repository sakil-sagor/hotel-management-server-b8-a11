const express = require('express');
const roomsController = require('../../controllers/rooms.controller');
const verifyToken = require('../../middleware/verifyToken');
const router = express.Router();



router.route('/all')
    .get(roomsController.getRooms)

router.route('/all/:roomId')
    .post(verifyToken, roomsController.createFeadback)
    .get(verifyToken, roomsController.getSingleRooms)
    .put(verifyToken, roomsController.putNewOrder)

router.route('/addrooms')
    .post(roomsController.createRooms)


router.route('/booking/:email')
    .get(verifyToken, roomsController.getAllBooking)
    .patch(verifyToken, roomsController.updateBooking)


router.route('/booking')
    .delete(verifyToken, roomsController.deleteBooking)




module.exports = router;