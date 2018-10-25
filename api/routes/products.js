/* jshint esversion: 6 */
const express = require("express");
const router = express.Router();

// products route
router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling the GET request of products"
  });
});

router.post("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling the POST request of products"
  });
});
router.get("/:productId", (req, res, next) => {
  const id = req.params.productId;
  if (id === "special") {
    res.status(200).json({
      message: "You discovered the special id",
      id: id
    });
  } else {
    res.status(200).json({
      message: "You passed an regular ID"
    });
  }
});
router.patch("/:productId", (req, res, next) => {
  res.status(200).json({
    message: "product updated successfully !"
  });
});
router.delete("/:productId", (req, res, next) => {
  res.status(200).json({
    message: "product deleted successfully !"
  });
});
module.exports = router;
