var mongoose = require('mongoose');

var accessLogSchema = new mongoose.Schema({
    ip: String,
    accessed: {
        type: Date
    }
});

mongoose.model('AccessLog', accessLogSchema);