const UserModel = require("../models/userModel");
const { validatorUser, validatorPartialUser } = require("../middlewares/userValidator");
const { json } = require("express");

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
  static async login(req, res){
    const { email, password } = req.body
    const result = validatorPartialUser({ email, password })
    if(!result.success) return res.status(400).json({ error: JSON.parse(result.error.message )})
    const login = await UserModel.login(result.data)
    res.json(login)
  }
}

module.exports = authController;
