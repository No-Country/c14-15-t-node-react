const Crypto = require("crypto");
const Product = require("../Schema/ProductSchema");

const p = require("mongoose");
const { count } = require("console");

class productModel {
  // ------------------- create Product -------------------
  static async create(body) {
    // let countProduct = await Product.count();
    let productId = Crypto.randomUUID();

    // if (!countProduct) {
    //   productId = 1;
    // } else {
    //   let lastProductId = await Product.find().sort({ id: "desc" }).limit(1);
    //   productId = lastProductId[0].id + 1;
    // }

    const newProduct = new Product(body);

    newProduct.id = productId;

    await newProduct.save();

    return {
      error: false,
      data: [
        {
          id: newProduct.id,
          message: "Producto creado con exito",
        },
      ],
    };
  }

  // ------------------- Edit Product -------------------
  static async edit(body) {
    const { id } = body;

    let product = await Product.findOne({ id });

    if (!product) {
      return {
        error: true,
        data: [{ messsage: "No existe un producto con este ID" }],
      };
    }

    let isValidProduct = await Product.findByIdAndUpdate(product._id, body, {
      new: true,
    });

    return {
      error: false,
      data: [
        {
          id: isValidProduct.id,
          data: [{ message: "Producto editado con exito" }],
        },
      ],
    };
  }

  // ------------------- Delete Product -------------------
  static async delete(body) {
    const { id } = body;

    let product = await Product.findOne({ id });

    if (!product) {
      return {
        error: true,
        data: [{ messsage: "No existe un producto con este ID" }],
      };
    }

    let isValidProduct = await Product.findByIdAndDelete(product._id);

    return {
      error: false,
      data: [
        {
          id: isValidProduct.id,
          message: "Producto eliminado con exito",
        },
      ],
    };
  }

  // ------------------- GetProductById Product -------------------
  static async getProductById(body) {
    const { id } = body;

    const productById = await Product.findOne({ id });

    if (!productById) {
      return {
        error: true,
        data: [{ message: "El ID utilizado no existe" }],
      };
    }
    return {
      error: false,
      data: [
        {
          id: productById.id,
          name: productById.name,
          subtitle: productById.subtitle,
          description: productById.description,
          detail: productById.detail,
          brand_name: productById.brand_name,
          technical_info: productById.technical_info,
          measures: productById.measures,
          energy_efficiency: productById.energy_efficiency,
          price: productById.price,
          available_quantity: productById.available_quantity,
          image: productById.image,
          category: productById.category,
        },
      ],
    };
  }
}

module.exports = productModel;
