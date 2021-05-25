const vision = require('@google-cloud/vision');

const client = new vision.ImageAnnotatorClient({
    keyFilename: '../key.json',
});

const getFile = async (req, res, next) => {
    const { files } = req;

    const textFromDoc = await getGoogleVision(files[0]);
};

const getGoogleVision = async (file, next) => {
    try {
        const [result] = await client.textDetection(file);
        const detection = result.textAnnotations;
        const { description } = detection[0];
        return description;
    } catch (err) {
        next(error);
    }
};

module.exports = {
    getFile,
};
