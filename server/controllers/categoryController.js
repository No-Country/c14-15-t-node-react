const CategoryModel = require("../models/categoryModel");
const { categoryValidator, categoryPartialValidator } = require("../middlewares/categoryValidator");

class categoryController{
    // ------------------- create category ---------------
    static async create(req, res){
        const result = categoryValidator(req.body);
        
        if(!result.success){
            return res.status(400).json({
                error: true, 
                data: JSON.parse(result.error.message)
            });
        }

        const newCategory = await CategoryModel.createCategory(result.data);
        
        if(!newCategory.error){
            return res.status(201).json(newCategory);        
        }
        
        return res.status(409).json(newCategory);
    }
    // ------------------- update category -------------------
    static async update(req, res) {
        try {
            const result = categoryValidator(req.body);
    
            if (!result.success) {
                return res.status(400).json({ 
                    error: true, 
                    data: JSON.parse(result.error.message) 
                });
            }
    
            const updatedCategory = await CategoryModel.updateCategory(result.data);
    
            if (updatedCategory && !updatedCategory.error) {
                return res.status(202).json(updatedCategory);
            } else {
                return res.status(400).json(updatedCategory);
            }
        } catch (error) {
            return res.status(500).json({ error: true, message: 'Ocurrió un error' });
        }
    }
    
    // ------------------- delete category -------------------
    static async delete(req, res) {
        const validationResult = categoryPartialValidator(req.body);
    
        if (!validationResult.success) {
            return res.status(400).json({
                error: true,
                data: JSON.parse(validationResult.error.message)
            });
        }
    
        const deletedCategory = await CategoryModel.deleteCategory(validationResult.data);
    
        if (deletedCategory.error) {
            return res.status(400).json(deletedCategory);
        }
    
        return res.status(202).json(deletedCategory);
    }
    
    // ------------------- get all category ------------------
    static async getAll(req, res) {
        // try {
          const get_all = await CategoryModel.getAllCategories();
          
          if (get_all.error) {
            return res.status(500).json({ error: 'Error al buscar registros de categorías' });
          }

          res.status(200).json(get_all);
        // } catch (error) {
        //   console.log(error)
        //   res.status(500).json({ error: 'Error interno del servidor' });
        // }
      }
}

module.exports = categoryController;
