const BrandModel = require("../models/brandModel");
const { brandValidator, brandPartialValidator } = require("../middlewares/brandValidator");

class brandController{
    // ------------------- create brand ---------------
    static async create(req, res){
        const result = brandPartialValidator(req.body);
        
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
    // ------------------- update brand ---------------
    static async update(req, res){
        const result = brandValidator(req.body);
        
        if(!result.success){
            return res.status(400).json({ 
                error: true, 
                data: JSON.parse(result.error.message) 
            });
        }
        
        const updatedBrand = await BrandModel.updateBrand(result.data);
        
        if(updatedBrand.error){
            return res.status(400).json(updatedBrand);
        }
        
        return res.status(202).json(updatedBrand);
    }
    // ------------------- delete brand ---------------
    static async delete(req,res){
        const result = brandPartialValidator(req.body);
        
        if(!result.success){
            return res.status(400).json({ 
                error: true, 
                data: JSON.parse(result.error.message) 
            });
        }

        const deletedBrand = await BrandModel.deleteBrand(result.data);
        if(deletedBrand.error){
            return res.status(400).json(deletedBrand);
        }

        return res.status(202).json(deletedBrand);

    }

}
module.exports = brandController;