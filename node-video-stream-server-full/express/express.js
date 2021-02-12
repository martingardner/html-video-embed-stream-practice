const {__EXPRESS_PORT} = require('../constants/constants');
const express = require('express');
const app = express();
const { apiErrorHandler } = require('./error-handlers');


app.listen(__EXPRESS_PORT, ()=> {
    console.log('Server has started express.js, port::',__EXPRESS_PORT);
});

require('../routes/routes')(app);

app.use(apiErrorHandler);