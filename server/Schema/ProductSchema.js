const { Schema, model } = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const ProductSchema = Schema(
  {
    productId: {
      index: true,
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    detail: {
      type: String,
      required: true,
    },
    technical_info: {
      driver_model: String,
      energy_use: String,
    },
    mesaures: {
      height: String,
      width: String,
      base_diameter: String,
    },
    energy_efficiency: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    available_quantity: {
      type: Number,
      required: true,
    },
    images: {
      cover: String,
      picture_1: String,
      picture_2: String,
    },
    category: {
      id: String,
      name: String,
      brand_name: String,
    },
    productEnabled: {
      type: Boolean,
      required: true,
      default: true,
    },
    garanty: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

ProductSchema.plugin(mongoosePaginate);

module.exports = model("Product", ProductSchema);
