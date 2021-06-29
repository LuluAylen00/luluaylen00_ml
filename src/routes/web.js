const express = require("express");
const app = express.Router();
const fs = require("fs");
const path = require("path");

app.get("/", (req, res) => res.sendFile(path.resolve(__dirname, "../views/home.html")))

module.exports = app;