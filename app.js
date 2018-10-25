/* jshint esversion: 6 */
const express = require("express");
const app = express("./app");

const productRoutes = require("./api/routes/products");

app.use("/products", productRoutes);
module.exports = app;
