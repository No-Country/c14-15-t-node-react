const{mercadoPago} = require('../helper/mercadopago') 
class mercadoPagoController {
  //------------Create mercadoPago----------------
  static async createmercadoPago(req, res){
    const response = await mercadoPago()
    res.send(response)
  }
  //------------Update mercadoPago----------------
  static async updatemercadoPago(req, res){
    
  }
}
module.exports = mercadoPagoController