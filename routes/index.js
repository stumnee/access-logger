const express = require('express')

const router = express.Router()


router.get('/', (req, res) => {
    res.send('index')
})

router.get('/log', (req, res) => {
    res.status(200).send('get')
})

router.post('/log', (req, res) => {
    res.status(201).send('post')
})

module.exports = router