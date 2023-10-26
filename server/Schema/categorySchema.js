const { Schema, model } = require("mongoose");

const CategorySchema = Schema(
{
    id: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    brands: {
        type: [String], 
        required: true 
    }
},
{
    timestamps: true,
    versionKey: false
}
);
module.exports = model("Category", CategorySchema);