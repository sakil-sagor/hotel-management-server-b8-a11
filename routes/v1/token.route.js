const express = require('express');
const tokenController = require('../../controllers/token.controller');
const router = express.Router();



router.route('/generatetoken')
    .post(tokenController.accessTokenGenerate)




module.exports = router;