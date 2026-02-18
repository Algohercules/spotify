const {Imagekit} = require("@imagekit/nodejs")

const ImagekitClient = new Imagekit({
    privatekey: process.env.IMAGEKIT_PRIVATE_KEY,
})

async function uploadFile(file){
    const result = await ImagekitClient.files.upload({
        file,
        fileName : "music_" + Date.now(),
        folder : "spotify/music"
    })

    return result;
}

module.exports = {uploadFile}