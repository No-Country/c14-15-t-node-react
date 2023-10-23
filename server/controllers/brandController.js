//const CategoryModel = require("../models/categoryModel");
const BrandModel = require("../models/brandModel");
const { categoryValidator, categoryPartialValidator } = require("../middlewares/categoryValidator");
const { update } = require("./categoryController");

class brandController{
    // ------------------- create brand ---------------
    static async create(req, res){
        const result = categoryPartialValidator(req.body);
        if(!result.success){
            return res.status(400).json({ 
                error: true, 
                data: JSON.parse(result.error.message) 
            });
        }
        const newBrand = await BrandModel.createBrand(result.data);

        if(!newBrand.error){
            return res.status(200).json(newBrand);
        }
        return res.status(400).json(newBrand);
    }
    // ------------------- delete brand ---------------
    // ------------------- update brand ---------------

}
module.exports = brandController;