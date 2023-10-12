const UserModel = require("../models/userModel");
const {
  validatorUser,
  validatorPartialUser,
} = require("../middlewares/userValidator");

class authController {
  // ------------------- create user -------------------
  static async create(req, res) {
    const result = validatorUser(req.body);

    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) });
    }

    const newUser = await UserModel.createUser(result.data);

    if (!newUser.error) {
      res.status(201).json(newUser);
    }
    res.status(409).json(newUser);
  }
  // ------------------- updating user -------------------
  static async update(req, res) {
    const result = validatorPartialUser(req.body);
    if(!result.success){
      return res.status(400).json({error: JSON.parse(result.error.message)})
    }
    const updatedUser = await UserModel.updateUser(result.data);
    res.status(200).json(updatedUser);
  }
  // ------------------- login user-------------------
  static async login(req, res) {
    const { email, password } = req.body;

    const result = validatorPartialUser({ email, password });

    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) });
    }

    const login = await UserModel.login(result.data);

    if (!login.error) {
      return res.status(200).json(login);
    }
    res.status(400).json(login);
  }
  // ------------------- validate token -------------------
  static async validateToken(req, res) {
    const token = await UserModel.revalidateToken(req);

    res.status(200).json(token);
  }
  
}

module.exports = authController;
