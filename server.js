'use strict';

const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const mongoose = require('mongoose');
const passport = require('passport');

const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(express.static("public"));
app.use(morgan('dev'));
app.use(bodyParser());

app.get("/", (req, res) => 
    res.json({ foo: "bar" })
);
 



app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT}`);
});
