const CategoryModel = require("../models/categoryModel");
const { categoryValidator } = require("../middlewares/categoryValidator");

class categoryController{
    // ------------------- create category ---------------
    static async create(req, res){
        const result = categoryValidator(req.body);
        if(!result.success){
            res
            .status(400)
            .json({error: true, data: JSON.parse(result.error.message)});
        }
        const newCategory = await CategoryModel.createCategory(result.data);
        if(!newCategory.error){
            res.status(201).json(newCategory);        
        }
        res.status(409).json(newCategory);
    }
    // ------------------- update user -------------------
    // ------------------- delete user -------------------
    // ------------------- get all user ------------------



}

module.exports = categoryController;
