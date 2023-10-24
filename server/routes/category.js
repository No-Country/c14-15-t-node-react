const { Router } = require("express");

const categoryController = require("../controllers/categoryController");

const categoryRoutes = Router();

categoryRoutes.post("/create", categoryController.create);
categoryRoutes.patch("/edit", categoryController.update);
categoryRoutes.delete("/delete", categoryController.delete);
categoryRoutes.get("/getAll", categoryController.getAll);

module.exports = {
    categoryRoutes,
};