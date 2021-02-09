const { getVideoInformation } = require('../media/manifest');
const { dataReturnFormat } = require('./routes-helper');

module.exports.getVideo = (req, res) => {      
    if(req.params.id){
        console.log('req.params.id', req.params.id);
        let videoInfo = getVideoInformation(req.params.id);
        console.log('videoInfo', videoInfo);
        //res.status(200).json( dataReturnFormat(200, '', videoInfo) )
        //run to video specs
    } else {
        //return a 400 series error
    }
}