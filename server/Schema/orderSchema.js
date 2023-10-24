const { Schema, model } = require("mongoose");
const { string } = require("zod");

const OrderSchema = new Schema(
  {
    uid: {
      index: true,
      type: String,
      required: true,
      unique: true,
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
    products_quantity: {
      type: Number,
      require: true,
    },
    total: {
      type: Number,
      require: true,
    },
    status:{
      type: String
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
module.exports = model("Order", OrderSchema)