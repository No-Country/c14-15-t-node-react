const Crypto = require("crypto");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../Schema/UserSchema");
const { generateToken } = require("../helper/jwt");

class UserModel {
  static async createUser(body) {
    const { email, password } = body;

    let user = await User.findOne({ email });

    if (user) {
      return { error: true, message: "Email ya utlizado" };
    }

    user = new User(body);

    user.uid = Crypto.randomUUID();
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);

    await user.save();

    const token = await generateToken(user.uid, user.firstname, user.lastname);
    return {
      error: false,
      user: {
        uid: user.uid,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        token,
      },
    };
  }

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
}

module.exports = UserModel;
