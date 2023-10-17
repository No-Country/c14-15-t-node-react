const Crypto = require("crypto");
const Product = require("../Schema/ProductSchema");

const p = require("mongoose");

class productModel {
  // ------------------- create Product -------------------
  static async create(body) {
    let countProduct = await Product.count();
    let productId = 0;

    if (!countProduct) {
      productId = 1;
    } else {
      let lastProductId = await Product.find().sort({ id: "desc" }).limit(1);
      productId = lastProductId[0].id + 1;
    }

    const newProduct = new Product(body);

    newProduct.id = productId;

    await newProduct.save();
  }
}

module.exports = productModel;
