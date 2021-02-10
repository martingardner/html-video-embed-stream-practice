const {__EXPRESS_PORT} = require('../constants/constants');
const express = require('express');
const app = express();

app.listen(__EXPRESS_PORT, ()=> {
    console.log('Server has started express.js, port::',__EXPRESS_PORT);
});

module.exports.app = app;
require('../routes/routes-video')(app);
require('../routes/routes-index')(app);