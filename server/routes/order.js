const { Router } = require("express");
const orderRoutes = Router();
const orderController = require("../controllers/orderController.js");
const mercadoPagoRoutes = require('./mercadopago.js');

orderRoutes.use(mercadoPagoRoutes);
orderRoutes.post("/create", orderController.createOrder);

module.exports = { orderRoutes };