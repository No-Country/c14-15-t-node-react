const { Router } = require("express");

const categoryController = require("../controllers/categoryController");
const brandController = require("../controllers/brandController");

const categoryRoutes = Router();

categoryRoutes.post("/create", categoryController.create);
categoryRoutes.patch("/edit", categoryController.update);
categoryRoutes.delete("/delete", categoryController.delete);
categoryRoutes.get("/getAll", categoryController.getAll);

// brand routes
categoryRoutes.patch("/create/", brandController.create);
// categoryRoutes.patch("/edit/", brandController.create);
// categoryRoutes.delete("/delete/", brandController.create);


module.exports = {
    categoryRoutes,
};