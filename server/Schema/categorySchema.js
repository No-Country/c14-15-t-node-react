const { Schema, model } = require("mongoose");

const CategorySchema = Schema(
{
    id: {
        index: true,
        type: Number,
        required: true,
        unique: true,
        default: 1,
    },
    name: {
        type: String,
        required: true,
    },
},
{
    timestamps: true,
    versionKey: false,
}
);
module.exports = model("Category", CategorySchema);