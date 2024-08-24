const express = require("express");
const router = express.Router();
const {
  listAllProducts,
  filterProductById
} = require("../controller/productControllers");

router.get("/", listAllProducts);
router.get("/:id", filterProductById);

module.exports = router;
