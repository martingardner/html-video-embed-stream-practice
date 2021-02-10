const path = require("path");

module.exports = (app) => {
    app.route('/')
    .get(returnIndex)
}

function returnIndex(req, res){
    const indexPath = path.resolve(__dirname, '..', 'index.html');
    console.log('indexPath', indexPath);
    res.sendFile(indexPath);
}