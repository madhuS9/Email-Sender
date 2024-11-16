const mongoose = require('mongoose');

const EmailSchema = new mongoose.Schema({
    recipient: String,
    subject: String,
    body: String,
    status: { type: String, enum: ['sent', 'pending', 'failed'], default: 'pending' },
});

module.exports = mongoose.model('Email', EmailSchema);
