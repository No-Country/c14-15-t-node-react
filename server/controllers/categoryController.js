const CategoryModel = require("../models/categoryModel");
const { categoryValidator, categoryPartialValidator } = require("../middlewares/categoryValidator");

class categoryController{
    // ------------------- create category ---------------
    static async create(req, res){
        const result = categoryValidator(req.body);
        if(!result.success){
            return res
            .status(400)
            .json({error: true, data: JSON.parse(result.error.message)});
        }
        const newCategory = await CategoryModel.createCategory(result.data);
        if(!newCategory.error){
            return res.status(201).json(newCategory);        
        }
        return res.status(409).json(newCategory);
    }
    // ------------------- update category -------------------
    static async update(req, res){
        const result = categoryValidator(req.body);
        if(!result.success){
            return res
            .status(400)
            .json({error: true, data: JSON.parse(result.error.message)});
        }

        const updatedCategory = await CategoryModel.updateCategory(result.data);
        if (updatedCategory && !updatedCategory.error) {
            return res.status(202).json(updatedCategory);
        }
        return res.status(400).json(updatedCategory);

    }
    // ------------------- delete category -------------------
    // ------------------- get all category ------------------



}

module.exports = categoryController;
