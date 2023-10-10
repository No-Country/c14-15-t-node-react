const { response } = require("express");
const UserModel = require("../models/userModel");
const validatorUser = require("../middlewares/userValidator");

class userController {
  static async getAll(req, res) {
    const users = await UserModel.getAll();
    res.status(200).json(users);
  }

  static async getUserById(req, res = response) {
    const { id } = req.params;
    res.status(200).json({ id: id });
  }

  static async create(req, res) {
    const result = validatorUser(req.body);

    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) });
    }

    res.status(201).json(result);
  }
}

module.exports = userController;
