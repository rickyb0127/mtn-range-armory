"use strict";

var express = require("express");
var path = require("path");

var app = express();

app.use(express.static(path.join(__dirname, "../dist")));
app.listen(7777, function(){
    console.log("Started listening on port", 7777);
});
