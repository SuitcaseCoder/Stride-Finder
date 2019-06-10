'use strict';

const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const mongoose = require('mongoose');
const passport = require('passport');

const morgan = require('morgan');
const bodyParser = require('body-parser');

// authentication
// require('./config/passport')(passport);
app.use(express.static("public"));
app.use(morgan('common'));
app.use(bodyParser());

// app.use(passport.initialize());
// app.use(passport.session());


// ------
app.get("/", (req, res) => 
    res.json({ foo: "bar" })
);
 
// routes -----------------------------------------
require('./app/routes/main.js')(app,passport);
require('./app/routes/auth.js')(app,passport);
//additional routes to be added


// launch ------------------------------------------
app.listen(port);
console.log(`Your app is listening on port ${process.env.PORT || 8080}`);

