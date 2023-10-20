const { Schema, model } = require("mongoose");
const { string } = require("zod");

const ProductSchema = Schema(
  {
    id: {
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
    image: {
      cover: String,
      picture_1: String,
      picture_2: String,
    },
    category: {
      id: String,
      name: String,
      brand_name: String,
    },
    ProductEnabled: {
      type: String,
      required: true,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Product", ProductSchema);
