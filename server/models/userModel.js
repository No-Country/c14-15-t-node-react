const Crypto = require("crypto");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../Schema/UserSchema");

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

    return {
      error: false,
      user: {
        uid: user.uid,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
      },
    };
  }

  static async login(body) {
    const { email, password } = body;
    const user = await User.findOne({email});
    if (!user) {
      return { error: true, message: "mail o contraseña incorrectos" };
    }
    if (!bcrypt.compare(password, user.password)) {
      return { error: true, message: "mail o contraseña incorrectos" };
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES,
    });
    return { error: false, token };
  }
}
module.exports = UserModel;
