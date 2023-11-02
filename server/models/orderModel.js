const Crypto = require("crypto");
const Order = require("../Schema/OrderSchema");
const http = require("http");
const mercadopagoAPI = require("../middlewares/mercadopago");
const { hostname } = require("os");

const html_templates = __dirname + "/html_templates";

class orderModel {
  // ------------------- create Order ---------------
  static async create(body) {
    const { uid, products, total_products, total, url } = body;
    // const newOrderId = Crypto.randomUUID();

    let newOrder = new Order(body);

    const newItems = products.map((e) => {
      return {
        title: e.name,
        unit_price: e.price,
        current_id: "ARS",
        quantity: e.quantity,
      };
    });

    const preference = {
      items: newItems,

      back_urls: {
        success: url + "/api/v1/orders/success",
        pending: url + "/api/v1/orders/pending",
        failure: url + "/api/v1/orders/failure",
        // pending: "http://localhost:4000/api/v1/orders/pending",
        // failure: "http://localhost:4000/api/v1/orders/failure",
      },
      notification_url: url + "/api/v1/orders/webhook",
      // "https://9039-190-230-45-6.ngrok-free.app/api/v1/orders/webhook",
      auto_return: "approved",
    };

    try {
      const resultMP = await mercadopagoAPI(preference);

      if (!resultMP) {
        return { error: true, data: { message: "Error interno" } };
      }

      newOrder.orderId = resultMP.body.id;
      newOrder.status = "pending";

      await newOrder.save();

      return resultMP.body.init_point;
    } catch (error) {
      console.log(error.message);
      return { error: true, data: { message: "Error interno" } };
    }
  }

  static async success(body) {
    const { _id, orderId } = await Order.findOne({
      orderId: body.preference_id,
    });

    let order = await Order.findByIdAndUpdate(
      _id,
      { status: body.status },
      {
        new: true,
      }
    );

    if (!order) {
      return {
        error: true,
        data: { message: "Error interno contacte al soporte" },
      };
    }

    return {
      error: false,
      data: {
        orderId: orderId,
        message: "Tu compra fue realizada con exito",
      },
    };
  }

  static async failure(body) {
    const { _id } = await Order.findOne({ orderId: body.preference_id });

    let order = await Order.findByIdAndUpdate(
      _id,
      { status: "failure" },
      {
        new: true,
      }
    );

    if (!order) {
      return {
        error: true,
        data: { message: "Error interno contacte al soporte" },
      };
    }

    return {
      error: false,
      data: {
        message: "Lo sentimos mucho. No pudimos terminar el proceso de pago ",
      },
    };
  }

  static async pending(body) {
    const { _id } = await Order.findOne({ orderId: body.preference_id });

    let order = await Order.findByIdAndUpdate(
      _id,
      { status: "pending" },
      {
        new: true,
      }
    );

    if (!order) {
      return {
        error: true,
        data: { message: "Error interno contacte al soporte" },
      };
    }

    return {
      error: false,
      data: {
        message: "Lo sentimos mucho. No pudimos terminar el proceso de pago ",
      },
    };
  }

  // static async webhook(body) {
  //   const { _id } = await Order.findOne({ orderId: body.preference_id });

  //   let order = await Order.findByIdAndUpdate(
  //     _id,
  //     { payment_id: body.data.id, type: body.type },
  //     {
  //       new: true,
  //     }
  //   );

  //   if (!order) {
  //     return {
  //       error: true,
  //       data: { message: "Error interno contacte al soporte" },
  //     };
  //   }

  //   return {
  //     error: false,
  //     data: {
  //       message: "Lo sentimos mucho. No pudimos terminar el proceso de pago ",
  //     },
  //   };
  // }
}

module.exports = orderModel;
