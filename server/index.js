const express = require('express');

const router = require('./routers/urls');
const sequelize = require('./config/database');

sequelize.sync();

const app = express();

app.use(router);

app.listen(3001, () => {
    console.log('Server running in port 3001');
});
