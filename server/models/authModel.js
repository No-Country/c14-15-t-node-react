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

    const token = await generateToken(user.uid, user.firstname, user.lastname);
    return { error: false, token };
  }

  static async revalidateToken(body) {
    const { uid, firstname, lastname } = body;
    const token = await generateToken(uid, firstname, lastname);

    return { error: false, uid, firstname, lastname, token };
  }
  // === update user controller ====
  static async updateUser(body) {
    let { uid, firstname, lastname, email, address, password } = body;

    let user = await User.findOne({ uid });
    if (!user) {
      return {
        error: true,
        message: "El usuario que intenta modificar no existe",
      };
    }
    if (password) {
      body.password = user.password;
    }
    let isValidUser = await User.findByIdAndUpdate(user._id, body, {
      new: true,
    });
    return {
      error: false,
      user: {
        firstname: isValidUser.firstname,
        lastname: isValidUser.lastname,
        email: isValidUser.email,
      },
    };
  }
}

module.exports = AuthModel;
