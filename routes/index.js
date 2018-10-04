const express = require('express')

const router = express.Router()

require('../models/access-log.model')


const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/access-logger')

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("db connected")
});

var AccessLog = mongoose.model('AccessLog')


router.get('/', (req, res) => {
    res.status(200).send(':)')
})

router.get('/log', (req, res) => {
    AccessLog.find({}).sort('-accessed').limit(2).exec((err, logs) => {
        if(err) {
            return res.status(422).send({
                message: err
            });
        }
        res.json(logs);
    })
})

router.post('/log', (req, res) => {
    const accessLog = new AccessLog({ip: req.connection.remoteAddress, accessed: new Date()});

    accessLog.save((err, model) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(accessLog.toString())

        }
    })
})

module.exports = router