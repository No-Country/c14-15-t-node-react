const Crypto = require("crypto");
const bcrypt = require("bcryptjs");
const User = require("../Schema/UserSchema");
const { generateToken } = require("../helper/jwt");

class AuthModel {
  static async login(body) {
    const { email, password } = body;
    const user = await User.findOne({ email });
    if (!user) {
      return { error: true, message: "Email o contraseña incorrectos" };
    }

    const passValidated = bcrypt.compareSync(password, user.password);
    if (!passValidated) {
      return { error: true, message: "Email o contraseña incorrectos" };
    }

    const token = await generateToken(user.uid, user.firstname, user.isAdmin);
    return { error: false, data: { token } };
  }

  static async revalidateToken(body) {
    const { uid, firstname, lastname } = body;
    const token = await generateToken(uid, firstname, lastname);

    return { error: false, data: { token } };
  }
}

module.exports = AuthModel;
