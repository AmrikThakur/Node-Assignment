const express = require('express')
const app = express();
const PORT = 4400

require('dotenv').config()
require('./startup/prod')(app);
require('./startup/routes')(app);
require('./startup/join')();
require('./startup/db')()

app.listen(PORT, () => {
    console.log(`Listening to the port ${PORT}`)
})
