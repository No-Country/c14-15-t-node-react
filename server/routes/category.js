const { Router } = require("express");
const categoryController = require("../controllers/categoryController");

const categoryRoutes = Router();

// EndPoint create from categories
categoryRoutes.post("/create", categoryController.create);
// // EndPoint update from categories
// categoryRoutes.patch("/update", categoryController.update);
// // EndPoint delete from categories
// categoryRoutes.delete("/delete", categoryController.delete);
// // EndPoint get-all from categories
// categoryRoutes.get("/get-all", categoryController.getAll);

module.exports = {
    categoryRoutes,
    };