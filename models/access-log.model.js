var mongoose = require('mongoose');


var accessLogSchema = new mongoose.Schema({
    ip: String,
    accessed: Date
});

var accessLog = mongoose.model('accessLog', accessLogSchema);