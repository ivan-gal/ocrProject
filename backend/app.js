require('dotenv').config();
const express = require('express');
const path = require('path');

const { uploadFile } = require('./middleware');
const { ocrController } = require('./controllers');

//Initilizing the app

const staticPath = path.resolve(__dirname, 'static');

const app = express();

app.use(express.json());

app.use(express.static(staticPath));

app.post('/api/upload', uploadFile.single('docImg'), ocrController.fileToOcr);

//TODO - router to convert to docx

app.post('/api/convertdocx', ocrController.ocrToDocx);

//TODO - router to convert to pdf

app.post('/api/convertpdf', ocrController.ocrToPdf);

app.use(async (err, req, res, next) => {
    const status = err.isJoi ? 400 : err.code || 500;
    res.status(status);
    res.send({ resultado: 'ERROR', error: err.message });
});

module.exports = app;
