const { getVideoInformation } = require('../media/manifest');
const { dataReturnFormat } = require('./routes-helper');
const { videoStream } = require('../media/video')

module.exports.getVideo = (req, res) => {      
    if(req.params.id){
        //console.log('req.params.id', req.params.id);
        let videoInfo = getVideoInformation(req.params.id);
        //console.log('videoInfo', videoInfo);
        //res.status(200).json( dataReturnFormat(200, '', videoInfo) )
        //run to video specs
        if(videoInfo && videoInfo.hasOwnProperty('id')){
            const stream = videoStream(req, res, videoInfo);
            stream.pipe(res);
        } else {
            res.status(200).json( dataReturnFormat(200, `there is no video with id ${req.params.id}`, '') );
        }

        
    } else {
        //return a 400 series error
        res.status(400).json( dataReturnFormat(400, "there was an error with this call", '') );
    }
}