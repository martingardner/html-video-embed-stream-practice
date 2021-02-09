module.exports.dataReturnFormat = (status, statusText, data) => {
    return {
        "status" : status, 
        "statusText": statusText,
        "data": data
    }
}