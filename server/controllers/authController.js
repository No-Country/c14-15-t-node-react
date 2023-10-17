const { validatorPartialUser } = require("../middlewares/userValidator");
const AuthModel = require("../models/authModel");

class authController {
  // ------------------- login user-------------------
  static async login(req, res) {
    const { email, password } = req.body;

    const result = validatorPartialUser({ email, password });

    if (!result.success) {
      return res
        .status(400)
        .json({ error: true, data: JSON.parse(result.error.message) });
    }

    const login = await AuthModel.login(result.data);

    if (!login.error) {
      return res.status(200).json(login);
    }
    res.status(400).json(login);
  }

  // ------------------- validate token -------------------
  static async validateToken(req, res) {
    const token = await AuthModel.revalidateToken(req);

    res.status(200).json(token);
  }
}

module.exports = authController;
