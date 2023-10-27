const Crypto = require("crypto");
const bcrypt = require("bcryptjs");
const User = require("../Schema/UserSchema");
const { generateToken } = require("../helper/jwt");

class AuthModel {
  static async login(body) {
    const { email, password } = body;

    const user = await User.findOne({ email });

    if (!user) {
      return {
        error: true,
        data: { message: "Email o contraseña incorrectos" },
      };
    }

    const passValidated = bcrypt.compareSync(password, user.password);
    if (!passValidated) {
      return {
        error: true,
        data: { message: "Email o contraseña incorrectos" },
      };
    }

    const token = await generateToken(user.uid, user.isAdmin);
    return { error: false, data: { token } };
  }

  static async revalidateToken(body) {
    const { uid, isAdmin } = body;
    const token = await generateToken(uid, isAdmin);

    return { error: false, data: { token } };
  }
}

module.exports = AuthModel;
