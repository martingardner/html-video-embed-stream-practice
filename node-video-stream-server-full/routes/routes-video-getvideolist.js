const { getVideoList } = require('./routes-helpers/get-video');

module.exports = (app) => {
    app.route('/data/getVideoList')
        .get(getVideoList)
}