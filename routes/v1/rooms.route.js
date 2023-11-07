const express = require('express');
const roomsController = require('../../controllers/rooms.controller');
const router = express.Router();



router.route('/all')
    .get(roomsController.getRooms)

router.route('/all/:roomId')
    .post(roomsController.createFeadback)
    .get(roomsController.getSingleRooms)
    .put(roomsController.putNewOrder)

router.route('/addrooms')
    .post(roomsController.createRooms)


router.route('/booking/:email')
    .get(roomsController.getAllBooking)
    .patch(roomsController.updateBooking)


router.route('/booking')
    .delete(roomsController.deleteBooking)




module.exports = router;