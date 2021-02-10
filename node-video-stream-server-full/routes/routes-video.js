const { getVideo } = require('./get-video');

module.exports = (app) => {
    app.route('/video/:id')
        .get(getVideo);    
}
