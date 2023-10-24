const { createOrder } = require('../models/orderModel.js');

class OrderController {
  //------------Create order----------------
  static async createOrder(req, res){
    const result = orderValidator(req.body)
    if(result.success){
      return res.status(400)
      .json({error: true, data: JSON.parse(result.error.message)})
    }
    const newOrder = await OrderModel.createOrder(result.data)
    if(!newOrder.error){
      return res.status(201).json({error: false, newOrder})
    }
    return res.status(409).json(newOrder)
  }
  //------------Update order----------------
  static async updateOrder(req, res){
    const result = orderValidator(req.body)
    if(result.success){
      return res.status(400)
      .json({error: true, data: JSON.parse(result.error.message)})
    }
    const updateOrder = await OrderModel.updateOrder(result.data)
    if(!updateOrder.error){
      return res.status(201).json({error: false, updateOrder})
    }
    return res.status(409).json(updateOrder)
  }
  //------------Delete order----------------
}
module.exports = OrderController