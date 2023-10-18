const { Router } = require("express");
const productController = require("../controllers/productController");

const productRoutes = Router();

productRoutes.get("/:id", productController.getProductById);

productRoutes.post("/create", productController.create);

productRoutes.patch("/edit", productController.edit);

productRoutes.delete("/delete/:id", productController.delete);

module.exports = {
  productRoutes,
};
