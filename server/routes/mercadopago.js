const { Router } = require("express");
const mercadopagoRoutes = Router();
const mercadoPagoController = require("../controllers/mercadopagoController.js");

mercadoPagoRoutes.put("/succes", mercadoPagoController.updateOrder);
mercadoPagoRoutes.put("/pendig", mercadoPagoController.updateOrder);
mercadoPagoRoutes.put("/failed", mercadoPagoController.updateOrder);

module.exports = { mercadopagoRoutes };