const UserModel = require("../models/userModel");
const {
  validatorUser,
  validatorPartialUser,
} = require("../middlewares/userValidator");

class userController {
  // ------------------- create user -------------------
  static async create(req, res) {
    const result = validatorUser(req.body);

    if (!result.success) {
      return res
        .status(400)
        .json({ error: true, data: JSON.parse(result.error.message) });
    }

    const newUser = await UserModel.createUser(result.data);

    if (newUser.error) {
      return res.status(409).json(newUser);
    }
    res.status(201).json(newUser);
  }

  // ------------------- updating user -------------------
  static async update(req, res) {
    const result = validatorPartialUser(req.body);
    if (!result.success) {
      return res
        .status(400)
        .json({ error: true, data: JSON.parse(result.error.message) });
    }
    const updatedUser = await UserModel.updateUser(result.data);
    if (updatedUser.error) {
      return res.status(400).json(updatedUser);
    }
    res.status(202).json(updatedUser);
  }
}

module.exports = userController;
