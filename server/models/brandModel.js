const Category = require("../Schema/categorySchema");

class brandModel{
    static async createBrand(body){
        const { categoryId, brand } = body;

        const category = await Category.findOne({ categoryId });
        if(!category){
            return{
                error: true,
                data:{
                    message: 'No existe esta categoria'
                }
            }
        }
        
        const newBrandArray = [...category.brands]; // clone original array
        
        const existingBrand = await newBrandArray.find(brand => brand == body.brand)
        if(existingBrand){
            return{
                error: true,
                message: 'Esta marca ya existe'
            }
        }
                
        newBrandArray.push(brand);
                
        const newCategorysBrand = await Category.findOneAndUpdate(
            {_id: category._id}, 
            { $set: {brands: newBrandArray}},
            { new: true}
            )

        return { 
            error: false, 
            data:{
                message: 'Se agrego una nueva marca'
            }
        }
    }
}
module.exports = brandModel;