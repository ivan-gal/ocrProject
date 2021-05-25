const vision = require('@google-cloud/vision');
const { manipulateDoc } = require('../repository');
const { Packer } = require('docx');

const client = new vision.ImageAnnotatorClient({
    keyFilename: './backend/key.json',
});

const getFile = async (req, res, next) => {
    try {
        const { file } = req;

        const textFromDoc = await getGoogleVision(file.path, next);

        const document = manipulateDoc.createDoc(textFromDoc);

        const b64string = await Packer.toBase64String(document);

        res.setHeader(
            'Content-Disposition',
            'attachment; filename=My Document.docx'
        );
        res.send(Buffer.from(b64string, 'base64'));
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
