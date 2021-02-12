/*
throw new Error will trigger apiErrorHandler.  The message put in throw new Error will be err.message returned
*/
const { dataReturnFormat} = require('../helpers/helpers');


module.exports.apiErrorHandler = (err, req, res, next) => {
    res.status(400)
    res.json( dataReturnFormat(400, err.message, '') )
    nodeConsoleErrorMsgs(err);
}

function nodeConsoleErrorMsgs(err) {
    console.log('err msg', err.message);
    console.log('err name', err.name);
    console.log('err description', err.description);
    console.log('err filename', err.fileName);
    console.log('error line number', err.lineNumber);
    console.log('error stack', err.stack);
}