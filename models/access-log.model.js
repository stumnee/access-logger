var mongoose = require('mongoose');

var accessLogSchema = new mongoose.Schema({
    ip: String,
    accessed: {
        type: Date,
        default: new Date()
    }
});

var accessLog = mongoose.model('AccessLog', accessLogSchema);