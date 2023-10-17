const { Router } = require("express");
const productController = require("../controllers/productController");

const productRoutes = Router();

productRoutes.post("/create", productController.create);

module.exports = {
  productRoutes,
};
