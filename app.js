/* jshint esversion: 6 */
const express = require("express");
const app = express("./app");
const morgan = require("morgan");

const productRoutes = require("./api/routes/products");
const orderRoutes = require("./api/routes/orders");

app.use(morgan("dev"));
//Routes handling requests
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status(404);
  next(error);
});

app.use((req, res, next) => {});
module.exports = app;
