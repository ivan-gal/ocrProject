const vision = require('@google-cloud/vision');

const client = new vision.ImageAnnotatorClient({
    keyFilename: './backend/key.json',
});

const getFile = async (req, res, next) => {
    try {
        const { file } = req;

        const textFromDoc = await getGoogleVision(file.path, next);
        res.send(textFromDoc);
    } catch (err) {
        next(err);
    }
};
const getGoogleVision = async (file, next) => {
    try {
        const [result] = await client.textDetection(file);
        const detection = result.textAnnotations;
        const { description } = detection[0];
        return description;
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getFile,
};
