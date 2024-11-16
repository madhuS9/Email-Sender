const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailController');

router.post('/upload', emailController.uploadData);
router.post('/send-emails', emailController.sendEmails);
router.get('/email-status', emailController.getEmailStatus);

module.exports = router;
