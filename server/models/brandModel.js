const Category = require("../Schema/categorySchema");

class brandModel{
    static async createBrand(body){
        const { id, brands } = body;

        const category = await Category.findOne({ id });
        if(!category){
            return{
                error: true,
                data: [
                    {
                        message: 'No existe esta categoria'
                    }
                ]
            }
        }
        const newItem = "newBrand";
        const tempBrands = category.brands;
        tempBrands.push(newItem);
        console.log(category.brands)
        const newBrand = await Category.findOneAndUpdate({brands: category.brands}, { brands: tempBrands},{ new: true})

        return { newBrand }

        
    }
}
module.exports = brandModel;