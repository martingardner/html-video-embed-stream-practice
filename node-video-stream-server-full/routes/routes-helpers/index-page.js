const path = require("path");

module.exports.returnIndex = (req, res) => {
    const indexPath = path.resolve(__dirname, '../..', 'index.html');
    res.sendFile(indexPath);
}