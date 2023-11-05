const express = require('express');
const roomsController = require('../../controllers/rooms.controller');
const router = express.Router();


router.route('/all')
    .get(roomsController.getRooms)

router.route('/addrooms')
    .post(roomsController.createRooms)





module.exports = router;