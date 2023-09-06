const express = require("express");
const router = express.Router();
const Product = require("../Models/productModel");

const {
  getAllProducts,
  createSingleProduct,
  getSingleProduct,
  updatingSingleProduct,
  deleteSingleProduct,
} = require("../controllers/productController");

router.post("/", createSingleProduct);
router.get("/", getAllProducts);
router.get("/:id", getSingleProduct);
router.put("/:id", updatingSingleProduct);
router.delete("/:id", deleteSingleProduct);

module.exports = router;
