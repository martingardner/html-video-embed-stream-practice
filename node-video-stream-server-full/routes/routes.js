module.exports = (app) => {
    require('./routes-index')(app);
    require('./routes-video-id')(app);
    require('./routes-video-getvideolist')(app);
}