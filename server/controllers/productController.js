const {
  validatorProduct,
  validatorPartialProduct,
} = require("../middlewares/productValidator");
const productModel = require("../models/productModel");

class productController {
  // ------------------- create Product -------------------
  static async create(req, res) {
    if (req.isAdmin === false) {
      return res.status(401).json({
        error: true,
        message: "Permisos no valido",
      });
    }

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
    if (req.isAdmin === false) {
      return res.status(401).json({
        error: true,
        message: "Permisos no valido",
      });
    }
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
    if (req.isAdmin === false) {
      return res.status(401).json({
        error: true,
        message: "Permisos no valido",
      });
    }
    const productId = req.params.productId;

    const result = validatorPartialProduct({ productId });

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
    const productId = req.params.productId;

    const result = validatorPartialProduct({ productId });

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

  // ------------------- GetProductByCategory Product -------------------

  static async getProductByCategory(req, res) {
    const category = req.params.category;

    const { page, views } = req.query;

    const info = { category, page, views };

    const filteredProduct = await productModel.getProductByCategory(info);
    if (filteredProduct.error) {
      return res.status(404).json(filteredProduct);
    }
    res.status(200).json(filteredProduct);
  }

  // ------------------- GetProductByBrand Product -------------------
  static async getProductByBrand(req, res) {
    // const { category, brand } = req.params;
    const category = req.params.category;
    const brand = req.params.brand;
    const { page, views } = req.query;

    const info = { category, brand, page, views };

    const filteredProduct = await productModel.GetProductByBrand(info);
    if (filteredProduct.error) {
      return res.status(404).json(filteredProduct);
    }
    res.status(200).json(filteredProduct);
  }

  // ------------------- GetProductRecent Product -------------------
  static async getProductRecent(req, res) {
    const { page, views } = req.query;

    const info = { page, views };

    const filteredProduct = await productModel.GetProductRecent(info);
    if (filteredProduct.error) {
      return res.status(404).json(filteredProduct);
    }
    res.status(200).json(filteredProduct);
  }
}

module.exports = productController;
