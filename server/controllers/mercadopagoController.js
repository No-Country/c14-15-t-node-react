const OrderController = require("./orderController")

class mercadoPagoController {
  //------------Create mercadoPago----------------
  static async createmercadoPago(req, res){
    const newOrder = await OrderController.createOrder(req.body)
    res.send(newOrder)
  }
  //------------Update mercadoPago----------------
  static async updatemercadoPago(req, res){
    
  }
}
module.exports = mercadoPagoController