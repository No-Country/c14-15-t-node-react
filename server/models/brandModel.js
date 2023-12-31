const Category = require("../Schema/categorySchema");

class brandModel{
    static async createBrand(body){
        const { id, brand } = body;

        const category = await Category.findOne({ id });
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

    static async updateBrand(body){
        const { id, brand,  otherBrand } = body;
        
        const category = await Category.findOne({ id });
        if(!category){
            return{
                error: true,
                message: 'No existe esta categoria'
            };
        }

        const brands = [...category.brands ];
        
        const index = brands.indexOf(brand)
        if(index == -1){
            return {
                error: true,
                message: 'La marca que quiere actualizar no existe'
            };
        }
        
        const existinBrandToReplace = await brands.find(brand => brand == otherBrand);
        if(existinBrandToReplace){
            return{
                error: true,
                message: 'Esta marca ya existe'
            };
        }
        
        brands.splice(index, 1, body.otherBrand);
        
        const updatedBrand = await Category.findOneAndUpdate(
            {_id: category._id}, 
            { $set: {brands: brands}},
            { new: true}
            )

        return { 
            error: false, 
            data:{
                message: 'Se edito una marca'
            }
        }
    }

    static async deleteBrand(body){
        const { id, brand } = body;

        const category = await Category.findOne({ id });
        if(!category){
            return{
                error: true,
                message: 'No existe esta categoria'
            };
        }

        const brands = [...category.brands ];

        if(brands.length <= 1){
            return{
                error: true,
                message: 'No puedes eliminar la unica marca'
            };
        }
        
        const index = brands.indexOf(brand)
        if(index == -1){
            return {
                error: true,
                message: 'Esta marca no existe'
            };
        }

        const deleteBrand = brands.filter(brand => brand != body.brand)
        
        const deletedBrand = await Category.findOneAndUpdate(
            {_id: category._id}, 
            { $set: {brands: deleteBrand}},
            { new: true}
            )

        return { 
            error: false, 
            data:{
                message: 'Se elimino una marca'
            }
        }

    }
}
module.exports = brandModel;