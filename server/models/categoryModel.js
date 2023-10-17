const { models } = require("mongoose");
const Category = require("../Schema/categorySchema");

class categoryModel {
    static async createCategory(body){
        const { id, name} = body;
        
        let category = await Category.findOne({id});
        if(category){
            id++;
        }

        category = new Category(body);

        category.id = categoryId;
        category.name = name;

        await category.save();

        return{
            error: false,
            category: {
                id: category.id,
                name: category.name,
            },
        }
       
    }
}
module.exports = categoryModel;
