const multer = require('multer');
const path = require('path');
const fs = require('fs');

const { v4: uuidv4 } = require('uuid');

const uploadFile = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            const folder = path.join(__dirname, `../static/docImg/`);
            fs.mkdirSync(folder, { recursive: true });

            cb(null, folder);
        },
        filename: function (req, file, cb) {
            cb(null, uuidv4() + path.extname(file.originalname));
        },
    }),
    limits: {
        fileSize: 1024 * 1024 * 10, //10 MB
    },
});

module.exports = { uploadFile };
