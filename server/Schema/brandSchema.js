const { Schema, model } = require("mongoose");

const BrandSchema = Schema(
    {
        categoryId: {
            index: true,
            type: String,
            required: true,
            unique: true,
        },
        brand: {
            type: String,
            required: true,
        },
        otherBrand:{
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);
module.exports = model("Brand", BrandSchema);