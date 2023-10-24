const { Router } = require("express");

const brandController = require("../controllers/brandController");

const brandRoutes = Router();

// brand routes
brandRoutes.patch("/create", brandController.create);
//brandRoutes.patch("/edit/", brandController.create);
// brandRoutes.delete("/delete/", brandController.create);

module.exports = {
    brandRoutes
};