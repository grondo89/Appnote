"use strict";

const express = require("express");
const path = require("path");
const routes = require("./routes/index");
const bodyParser = require("body-parser");
var app = express();

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public", "index.html"));
});

// app.use('/', routes)

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`server started on port ${PORT}`));
