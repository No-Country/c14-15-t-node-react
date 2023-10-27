const Order = require('../Schema/orderSchema.js')
const { mercadoPago } = require('../helper/mercadopago.js');

class OrderModel {
  static async createOrder(body){
    const { products } = body;
    let countOrder = await Order.count();
    let orderId = 0;

    if (!countOrder) {
      orderId = 1;
    } else {
      let lastOrderId = await Order.find().sort({ id: "desc" }).limit(1);
      orderId = lastOrderId[0].id + 1;
    }
    const newPreference = await mercadoPago(products);
    if(newPreference.body)
    const newOrder = new Order(body);
    newOrder.id = orderId;

    return newPreference.body.init_point;

  }
}
module.exports = OrderModel