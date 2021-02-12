const { returnIndex } = require('./routes-helpers/index-page');

module.exports = (app) => {
    app.route('/')
    .get(returnIndex)
}

