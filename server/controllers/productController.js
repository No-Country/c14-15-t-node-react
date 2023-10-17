const { validatorProduct } = require("../middlewares/productValidator");

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

    res.json(result);
  }
}

module.exports = productController;
