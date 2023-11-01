const { orderValidator } = require("../middlewares/orderValidator");
const orderModel = require("../models/orderModel");
class orderController {
  // ------------------- create Order ---------------

  static async create(req, res) {
    const hostURL = req.protocol + "://" + req.get("host");
    // if (req.isAdmin === false) {
    //   return res.status(401).json({
    //     error: true,
    //     message: "Permisos no valido",
    //   });
    // }

    const result = orderValidator(req.body);

    if (!result.success) {
      return res.status(400).json({
        error: true,
        data: JSON.parse(result.error.message),
      });
    }
    result.data.url = hostURL;
    const newOrder = await orderModel.create(result.data);

    if (!newOrder.error) {
      return res.redirect(newOrder);
    }

    return res.status(409).json(newOrder);
  }

  static async success(req, res) {
    const newOrderSuccess = await orderModel.success(req.query);

    if (!newOrderSuccess.error) {
      return res.status(200).json(newOrderSuccess);
    }

    return res.status(409).json(newOrderSuccess);
  }
  static async pending(req, res) {
    const newOrderPending = await orderModel.pending(req.query);

    if (!newOrderPending.error) {
      return res.status(200).json(newOrderPending);
    }

    return res.status(409).json(newOrderPending);
  }
  static async failure(req, res) {
    const newOrderFailure = await orderModel.failure(req.query);

    if (!newOrderFailure.error) {
      return res.status(200).json(newOrderFailure);
    }

    return res.status(409).json(newOrderFailure);
  }

  static async webhook(req, res) {
    console.log(req.query);
    res.status(200).json("ok");
  }
}

module.exports = orderController;
