const BrandModel = require("../models/brandModel");
const { brandValidator, brandPartialValidator } = require("../middlewares/brandValidator");
class brandController{
    // ------------------- create brand ---------------
    static async create(req, res){
        const result = brandValidator(req.body);
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