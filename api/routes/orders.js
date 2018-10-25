/* jshint esversion: 6 */
const express = require("express");
const router = express.Router();

// route orders
router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "orders were fetched !"
  });
});

router.post("/:orderId", (req, res, next) => {
  res.status(200).json({
    message: "order was created !"
  });
});

router.delete("/:orderId", (req, res, next) => {
  res.status(200).json({
    message: "order deleted successfully !"
  });
});

module.exports = router;
