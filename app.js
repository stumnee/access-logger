const express = require('express')
const app = express()
const port = 3000

const routes = require('./routes');
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

app.listen(port, () => console.log(`Examnpm install mongooseple app listening on port ${port}!`))
