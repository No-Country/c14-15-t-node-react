const Crypto = require("crypto");
const bcrypt = require("bcryptjs");

const User = require("../Schema/UserSchema");

class UserModel {
  static async getAll() {
    return { messagge: "Todos los usuarios" };
  }

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
}
module.exports = UserModel;
