const express = require('express');
const tokenController = require('../../controllers/token.controller');
const router = express.Router();



router.route('/all')
    .get(tokenController.accessTokenGenerate)




module.exports = router;