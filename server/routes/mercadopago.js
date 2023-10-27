const { Router } = require("express");
const mercadopagoRoutes = Router();
const mercadoPagoController = require("../controllers/mercadopagoController.js");

mercadoPagoRoutes.post("/succes", mercadoPagoController.updateOrder);
mercadoPagoRoutes.post("/pendig", mercadoPagoController.updateOrder);
mercadoPagoRoutes.post("/failed", mercadoPagoController.updateOrder);
mercadoPagoController.post("/notification", mercardoPagoController.updataOrder);

module.exports = { mercadopagoRoutes };