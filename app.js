/* jshint esversion: 6 */
const express = require("express");
const app = express("./app");

app.use((req, res, next) => {
  res.status(200).json({
    message: "It works !"
  });
});
module.exports = app;
