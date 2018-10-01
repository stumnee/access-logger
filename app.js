const express = require('express')
const app = express()
const port = 3000

const routes = require('./routes');
const path = require('path');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/access-logger');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
});

app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

app.listen(port, () => console.log(`Examnpm install mongooseple app listening on port ${port}!`))
