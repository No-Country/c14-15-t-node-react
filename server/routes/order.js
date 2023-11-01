const { Router } = require("express");
const orderController = require("../controllers/orderController");

const orderRoutes = Router();

orderRoutes.post("/create", orderController.create);

orderRoutes.get("/success", orderController.success);
orderRoutes.get("/pending", orderController.pending);
orderRoutes.get("/failure", orderController.failure);

orderRoutes.post("/webhook", orderController.webhook);

module.exports = orderRoutes;
