const Category = require("../Schema/categorySchema");

class categoryModel {
    static async createCategory(body) {
        const { name } = body;
      
        // Check the number of existing categories
        const countCategory = await Category.count();
        let categoryId = 1;
      
        if (countCategory) {
          // If categories exist, find the last category's ID and increment it
          const lastCategory = await Category.findOne().sort({ id: 'desc' });
          categoryId = lastCategory ? lastCategory.id + 1 : 1;
        }
      
        // Check if a category with the same name already exists
        const existingCategory = await Category.findOne({ name });
      
        if (existingCategory) {
          return { error: true, message: `La categoría '${name}' ya existe.` };
        }
      
        const newCategory = new Category(body);
      
        // Set the category's ID and name
        newCategory.id = categoryId;
        newCategory.name = name;
      
        await newCategory.save();
      
        return {
          error: false,
          category: {
            id: newCategory.id,
            name: newCategory.name,
          },
        };
      }
      
    static async updateCategory(body) {
        const { id, name } = body;
      
        // Find the category by ID
        const category = await Category.findOne({ id });
      
        if (!category) {
          return {
            error: true,
            message: `La categoria con id: ${id} no existe`,
          };
        }
      
        // Update the category with the new data
        const updatedCategory = await Category.findByIdAndUpdate(category._id, body, {
          new: true,
        });
            
        return {
          error: false,
          data: {
            name: updatedCategory.name,
          },
        };
      }
      
}
module.exports = categoryModel;
