'use strict';
const express = require('express');
const app = express();
const cors = require("cors");
const path = require("path");
 
const PUBLIC_DIR = path.resolve(__dirname,"../public")
app.use("/", express.static(PUBLIC_DIR));
app.use(cors({origin:"http://localhost:3006"}));

const registerRoutes = require('./routes');
// server config
const port = process.env.PORT || 3000;

// register routes
registerRoutes(app);

// create server start method
const start = () => {
    return new Promise((resolve, reject) => {
        // start theyy7uyu77 server
        app.listen(port, () => {
            console.log(`Connected to Port ${port}`);
            resolve()
        });
    }).catch((error) => {
        console.log(`failed to start server => ${error.message}`)
    });
}

module.exports = start;


