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
    return {
      error: false,
      data: { firstname: user.firstname, lastname: user.lastname, token },
    };
  }

  static async revalidateToken(body) {
    const { uid, isAdmin } = body;
    console.log(isAdmin);
    console.log(uid);

    const token = await generateToken(uid, isAdmin);

    return { error: false, data: { isAdmin, token } };
  }
}

module.exports = AuthModel;
