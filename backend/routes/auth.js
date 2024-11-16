const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/authenticate', authController.authenticate);

module.exports = router;
