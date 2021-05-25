const app = require('./app');

const { PORT } = process.env;

const server = app.listen(PORT, () =>
    console.log(`server escuchando en puerto ${PORT}`)
);

module.exports = { server };
