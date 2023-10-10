const dbConnection = require("../database/db");

class UserModel {
  static async getAll() {
    await dbConnection();
    return { messagge: "Todos los usuarios" };
  }
}
module.exports = UserModel;
