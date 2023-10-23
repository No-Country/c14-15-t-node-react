const { Router } = require("express");
const productController = require("../controllers/productController");
const userExposed = require("../helper/userExposed");

const productRoutes = Router();

//get product by id
productRoutes.get("/:id", productController.getProductById);

//get product by Category
productRoutes.get("/:category", productController.GetProductByCategory);

//get product by Category and Brand - pagination
productRoutes.get("/:category/:brand", productController.GetProductByBrand);

//get product Recent Products Pagination
productRoutes.get("/", productController.GetProductRecent);

//Create product
productRoutes.post("/create", userExposed, productController.create);

//Edit product
productRoutes.patch("/edit", userExposed, productController.edit);

//Delete product
productRoutes.delete("/delete/", userExposed, productController.delete);

module.exports = {
  productRoutes,
};
