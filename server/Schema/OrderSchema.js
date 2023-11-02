const { Schema, model } = require("mongoose");

const OrderSchema = Schema(
  {
    orderId: {
      type: String,
      required: true,
      unique: true,
    },
    uid: {
      type: String,
      required: true,
      unique: true,
    },
    products: {
      type: [Object],
      required: true,
    },
    total_products: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      default: "pending",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Order", OrderSchema);
