const { validatorProduct } = require("../middlewares/productValidator");
const productModel = require("../models/productModel");

class productController {
  // ------------------- create Product -------------------
  static async create(req, res) {
    const result = validatorProduct(req.body);

    if (!result.success) {
      return res.status(400).json({
        error: true,
        data: JSON.parse(result.error.message),
      });
    }

    const newProduct = await productModel.create(result.data);
    // res.json(result.data);
  }
}

module.exports = productController;
