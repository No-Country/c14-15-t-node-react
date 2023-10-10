const { response } = require("express");
const UserModel = require("../models/userModel");
const validatorUser = require("../middlewares/userValidator");

class authController {
  static async getAll(req, res) {
    const users = await UserModel.getAll();
    res.status(200).json(users);
  }

  static async create(req, res) {
    const result = validatorUser(req.body);

    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) });
    }

    const newUser = await UserModel.createUser(result.data);

    res.status(201).json(newUser);
  }
}

module.exports = authController;
