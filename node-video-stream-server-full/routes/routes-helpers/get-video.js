const { getVideoInformation , getVideoList } = require('../../media/manifest');
const { dataReturnFormat } = require('../../helpers/helpers');
const { videoStream } = require('../../media/video')

module.exports.getVideo = (req, res) => {  
    let videoInfo = getVideoInformation(req.params.id);
    //run to video specs
    try{
        const stream = videoStream(req, res, videoInfo);
        stream.pipe(res);
    }
    catch(e){
        throw new Error('No video data');
    }
}

module.exports.getVideoList = (req, res) => {
    res.status(200).json( dataReturnFormat(200, 'video list', getVideoList() ));
}