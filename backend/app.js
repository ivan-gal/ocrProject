const express = require('express');
const path = require('path');

//Initilizing the app

const staticPath = path.resolve(__dirname, 'static');

const app = express();

app.use(express.json());

app.use(express.static(staticPath));

app.post('api/uploadDoc');

app.use(async (err, req, res, next) => {
    const status = err.isJoi ? 400 : err.code || 500;
    res.status(status);
    res.send({ resultado: 'ERROR', error: err.message });
});

module.exports = app;
