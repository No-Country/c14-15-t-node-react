const Crypto = require("crypto");
const Product = require("../Schema/ProductSchema");

class productModel {
  // ------------------- create Product -------------------
  static async create(body) {
    let productId = Crypto.randomUUID();

    const newProduct = new Product(body);

    newProduct.productId = productId;

    await newProduct.save();

    return {
      error: false,
      data: {
        productId,
        message: "Producto creado con exito",
      },
    };
  }

  // ------------------- Edit Product -------------------
  static async edit(body) {
    const { productId } = body;

    let product = await Product.findOne({ productId });

    if (!product) {
      return {
        error: true,
        data: { messsage: "No existe un producto con este ID" },
      };
    }

    let isValidProduct = await Product.findByIdAndUpdate(product._id, body, {
      new: true,
    });

    return {
      error: false,
      data: [
        {
          productId: isValidProduct.productId,
          data: { message: "Producto editado con exito" },
        },
      ],
    };
  }

  // ------------------- Delete Product -------------------
  static async delete(body) {
    const { productId } = body;

    let product = await Product.findOne({ productId });

    if (!product) {
      return {
        error: true,
        data: { messsage: "No existe un producto con este ID" },
      };
    }

    let isValidProduct = await Product.findByIdAndDelete(product._id);

    return {
      error: false,
      data: [
        {
          productId: isValidProduct.productId,
          message: "Producto eliminado con exito",
        },
      ],
    };
  }

  // ------------------- GetProductById Product -------------------
  static async getProductById(body) {
    const { productId } = body;

    const productById = await Product.findOne({ productId });

    if (!productById) {
      return {
        error: true,
        data: { message: "El ID utilizado no existe" },
      };
    }
    return {
      error: false,
      data: {
        productId: productById.productId,
        name: productById.name,
        subtitle: productById.subtitle,
        description: productById.description,
        detail: productById.detail,
        productEnabled: productById.productEnabled,
        technical_info: productById.technical_info,
        measures: productById.measures,
        energy_efficiency: productById.energy_efficiency,
        price: productById.price,
        available_quantity: productById.available_quantity,
        images: productById.images,
        category: productById.category,
      },
    };
  }

  // ------------------- GetProductByCategory Product -------------------
  static async getProductByCategory(body) {
    let filteredProduct = {};

    try {
      const { category, page, views } = body;

      if (!page || page < 1) {
        return {
          error: true,
          data: { message: "La page tiene que ser 1 o mayor" },
        };
      }

      const categoryCapitalize =
        category.charAt(0).toUpperCase() + category.slice(1);

      const viewsNumber = views || 9;

      const options = {
        select:
          "-_id productId name images price energy_efficiency category garanty available_quantity",
        page: page,
        lean: true,
        leanWithId: false,
        limit: viewsNumber,
      };

      const query = {
        "category.name": categoryCapitalize,
        productEnabled: true,
      };
      filteredProduct = await Product.paginate(query, options);
    } catch (error) {
      return { error: true, data: { message: "Hubo un error Interno" } };
    }

    if (filteredProduct.totalDocs == 0) {
      return {
        error: true,
        data: {
          products: filteredProduct.docs,
          totalProducts: filteredProduct.totalDocs,
          totalPages: filteredProduct.totalPages,
          page: filteredProduct.page,
          views: filteredProduct.limit,
        },
      };
    }

    return {
      error: false,
      data: {
        products: filteredProduct.docs,
        totalProducts: filteredProduct.totalDocs,
        totalPages: filteredProduct.totalPages,
        page: filteredProduct.page,
        views: filteredProduct.limit,
      },
    };
  }

  // ------------------- GetProductByBrand Product -------------------
  static async GetProductByBrand(body) {
    let filteredProduct = {};

    try {
      const { category, page, views, brand } = body;

      if (!page || page < 1) {
        return {
          error: true,
          data: { message: "La page tiene que ser 1 o mayor" },
        };
      }

      const categoryCapitalize =
        category.charAt(0).toUpperCase() + category.slice(1);

      const brandCapitalize = brand.charAt(0).toUpperCase() + brand.slice(1);

      const viewsNumber = views || 9;

      const options = {
        select:
          "-_id productId name images price energy_efficiency category garanty available_quantity",
        page: page,
        lean: true,
        leanWithId: false,
        limit: viewsNumber,
      };

      const query = {
        "category.name": categoryCapitalize,
        "category.brand_name": brandCapitalize,
        productEnabled: true,
      };

      filteredProduct = await Product.paginate(query, options);
    } catch (error) {
      return { error: true, data: [{ message: "Hubo un error Interno" }] };
    }

    if (filteredProduct.totalDocs == 0) {
      return {
        error: true,
        data: {
          products: filteredProduct.docs,
          totalProducts: filteredProduct.totalDocs,
          totalPages: filteredProduct.totalPages,
          page: filteredProduct.page,
          views: filteredProduct.limit,
        },
      };
    }

    return {
      error: false,
      data: {
        products: filteredProduct.docs,
        totalProducts: filteredProduct.totalDocs,
        totalPages: filteredProduct.totalPages,
        page: filteredProduct.page,
        views: filteredProduct.limit,
      },
    };
  }

  // ------------------- GetProductRecent Product -------------------
  static async GetProductRecent(body) {
    let filteredProduct = {};

    try {
      const { page, views } = body;

      if (!page || page < 1) {
        return {
          error: true,
          data: { message: "Page tiene que ser 1 o mayor" },
        };
      }

      const viewsNumber = views || 9;

      const options = {
        select:
          "-_id productId name images price energy_efficiency category garanty available_quantity",
        sort: { createdAt: -1 },
        lean: true,
        leanWithId: false,
        page: page,
        limit: viewsNumber,
      };

      const query = {
        productEnabled: true,
      };

      filteredProduct = await Product.paginate(query, options);
    } catch (error) {
      return { error: true, data: { message: "Hubo un error Interno" } };
    }

    if (filteredProduct.totalDocs == 0) {
      return {
        error: true,
        data: {
          products: filteredProduct.docs,
          totalProducts: filteredProduct.totalDocs,
          totalPages: filteredProduct.totalPages,
          page: filteredProduct.page,
          views: filteredProduct.limit,
        },
      };
    }

    return {
      error: false,
      data: {
        products: filteredProduct.docs,
        totalProducts: filteredProduct.totalDocs,
        totalPages: filteredProduct.totalPages,
        page: filteredProduct.page,
        views: filteredProduct.limit,
      },
    };
  }
}

module.exports = productModel;
