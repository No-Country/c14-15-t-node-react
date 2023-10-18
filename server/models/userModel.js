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
      return { error: true, message: "Email ya utilizado" };
    }

    user = new User(body);

    user.uid = Crypto.randomUUID();
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);

    await user.save();

    const token = await generateToken(user.uid, user.firstname, user.lastname);
    return {
      error: false,
      data: {
        // uid: user.uid,
        // firstname: user.firstname,
        // lastname: user.lastname,
        // email: user.email,
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
    return { error: false, data: { token } };
  }

  static async revalidateToken(body) {
    const { uid, firstname, lastname } = body;
    const token = await generateToken(uid, firstname, lastname);

    return { error: false, data: { token } };
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
      data: {
        id: user.id,
        // firstname: isValidUser.firstname,
        // lastname: isValidUser.lastname,
        // email: isValidUser.email,
        messsage: "Modificaste tu usuario correctamente",
      },
    };
  }
  // === updating password ===
  // static async updateUserPassword(body){
  //   const { uid, password } = body;
  //   let user = await User.findOne({uid});
  //   if(!user){
  //     return{error: true, message: "Este usuario no existe (?)"}
  //   }
  //   const passValidated = bcrypt.compareSync(password, user.password);
  //   if(!passValidated){
  //     return{error: true, message:"La contraseña es incorrecta"};
  //   }
  //   user = new User(body);
  //   user.password = password;
  //   await user.save();
  //   return{
  //     error: false,
  //     message: "La contraseña ha sido actualizada"
  //   }
  //   // aquí falta algo unu
  // }
}

module.exports = UserModel;
