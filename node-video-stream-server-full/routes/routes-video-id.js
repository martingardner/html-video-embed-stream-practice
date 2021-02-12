const { getVideo } = require('./routes-helpers/get-video');

module.exports = (app) => {
    app.route('/video/:id')
        .get(getVideo)  
}




