const express = require('express')
const app = express();
const cors = require('cors');
const helmet = require("helmet");
const compression = require("compression");
require('dotenv').config()

const PORT = process.env.PORT || 3000;

require('./startup/db')()

// Express Middleware and Body-Parser
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors())
app.use(helmet());
app.use(compression());

// Routes
require('./startup/routes')(app);
require('./startup/join')();


app.listen(PORT, () => {
    console.log(`Listening to the port ${PORT}`)
})
