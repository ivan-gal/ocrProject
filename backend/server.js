const app = require('./app');

const { PORT } = process.env;

const server = app.listen(PORT, () =>
    console.log(`Server listening on : ${PORT}`)
);

module.exports = { server };
