const Category = require("../Schema/categorySchema");
const Product = require("../Schema/ProductSchema");


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
          return { error: true, data:[{ message: 'La categoría ya existe.' }] };
        }
      
        const newCategory = new Category(body);
      
        // Set the category's ID and name
        newCategory.id = categoryId;
        newCategory.name = name;
      
        await newCategory.save();
      
        return {
          error: false,
          data: [{
            id: newCategory.id,
            message: 'Creacion exitosa'
          }]
        };
      }
      
    static async updateCategory(body) {
        const { id, name } = body;
      
        // Find the category by ID
        const category = await Category.findOne({ id });
      
        if (!category) {
          return {
            error: true,
            data: [{ message: 'No existe categoria con ese id' }]
          };
        }

        // Check if a category with the same name already exists
        const existingCategory = await Category.findOne({ name });
      
        if (existingCategory) {
          return { error: true, data: [{ message: 'La categoría ya existe.' }] };
        }
      
        // Update the category with the new data
        const updatedCategory = await Category.findByIdAndUpdate(category._id, body, {
          new: true,
        });
            
        return {
          error: false,
          data: [{ message: 'Se ha editado una categoria' }]
        };
      }
      
      static async deleteCategory(body) {
        const { id } = body;
      
        const category = await Category.findOne({ id });
      
        if (!category) {
          return {
            error: true,
            data: [{ message: 'Esta categoría no existe' }]
          };
        }
      
        const product = await Product.findOne({ category: category.name });
      
        if (product) {
          return {
            error: true,
            data: [{ message: 'Existen productos con esta categoría' }]
          };
        }
      
        const deletedCategory = await Category.findByIdAndDelete(category._id);
      
        return {
          error: false,
          data: [{ message: 'Se ha eliminado con éxito el registro.' }]
        };
      }

      static async getAllCategories(){
        const categories =  await Category.find({});
        if(!categories) {
          return {
            error: true,
            data: [{ message: 'No se encontraron registros' }]
          }
        }

        const listCategories = categories.map((category)=>{
          return {id: category.id, name: category.name};
        });

        return{
          error: false,
          data: [{ listCategories, message: 'retorno todas las categorias'}]
        }

      }
      
          
}
module.exports = categoryModel;
