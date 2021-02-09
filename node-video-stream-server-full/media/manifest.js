const manifest = [
    {id:1, name: 'Sample Video 1', fileName: 'sample1', format: 'mp4'},
    {id:2, name: 'Sample Video 2', fileName: 'sample2', format: 'mp4'},
];

module.exports.getVideoInformation = (id) => {
    console.log('id', id);
    const index = manifest.findIndex( (i) => i.id == id);
    console.log('index', index);
    return manifest[index];
}