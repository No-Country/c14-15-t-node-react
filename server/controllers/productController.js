const { number } = require("zod");
const {
  validatorProduct,
  validatorPartialProduct,
} = require("../middlewares/productValidator");
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
    if (newProduct.error) {
      return res.status(409).json(newProduct);
    }
    res.status(201).json(newProduct);
  }

  // ------------------- Edit Product -------------------

  static async edit(req, res) {
    // const id = parseInt(req.params.id);
    // const newBody = {
    //   id,
    //   ...req.body,
    // };
    const result = validatorPartialProduct(req.body);

    if (!result.success) {
      return res.status(400).json({
        error: true,
        data: JSON.parse(result.error.message),
      });
    }

    const productEdited = await productModel.edit(result.data);
    if (productEdited.error) {
      return res.status(409).json(productEdited);
    }
    res.status(200).json(productEdited);
  }

  // ------------------- Delete Product -------------------
  static async delete(req, res) {
    const id = parseInt(req.params.id);

    const result = validatorPartialProduct({ id });

    if (!result.success) {
      return res.status(400).json({
        error: true,
        data: JSON.parse(result.error.message),
      });
    }

    const productEliminated = await productModel.delete(result.data);

    if (productEliminated.error) {
      return res.status(409).json(productEliminated);
    }
    res.status(200).json(productEliminated);
  }

  // ------------------- GetProductById Product -------------------

  static async getProductById(req, res) {
    const id = parseInt(req.params.id);

    const result = validatorPartialProduct({ id });

    if (!result.success) {
      return res.status(400).json({
        error: true,
        data: JSON.parse(result.error.message),
      });
    }

    const ProductById = await productModel.getProductById(result.data);
    if (ProductById.error) {
      return res.status(409).json(ProductById);
    }
    res.status(200).json(ProductById);
  }
}

module.exports = productController;
