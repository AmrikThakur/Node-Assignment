const express = require('express')
const app = express();
const db = require('./models/index')
const PORT = 4400

require('dotenv').config()
require('./startup/prod')(app);
require('./startup/routes')(app);
require('./startup/join')();

// Database Connection
db.sequelize.sync()
    .then(() => {
        console.log("Synced db.");
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });


app.listen(PORT, () => {
    console.log(`Listening to the port ${PORT}`)
})
