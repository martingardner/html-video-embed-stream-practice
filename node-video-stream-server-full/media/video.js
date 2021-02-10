const fs = require("fs");
const path = require("path");


module.exports.videoStream = (req, res, videoInfo) => {
    const range = req.headers.range;

    if (!range || videoInfo.fileName.length <= 0 || videoInfo.format.length <= 0) {
      res.status(400).send("Requires Range header");
    }
    console.log('videoInfo', videoInfo);
    const videoName = `${videoInfo.fileName}.${videoInfo.format}`;
    // get video stats 
    const videoPath = path.resolve(__dirname, videoName);
    const videoSize = fs.statSync(videoPath).size;
    
    // Parse Range
    // Example: "bytes=32324-"
    const CHUNK_SIZE = 10 ** 6; // 1MB
    const start = Number(range.replace(/\D/g, ""));
    const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
  
    // Create headers
    const contentLength = end - start + 1;
    const headers = {
      "Content-Range": `bytes ${start}-${end}/${videoSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": contentLength,
      "Content-Type": "video/mp4",
    };
  
    // HTTP Status 206 for Partial Content
    res.writeHead(206, headers);
  
    // create video read stream for this particular chunk
    return fs.createReadStream(videoPath, { start, end });
}