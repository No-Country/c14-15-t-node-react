const { model, schema } = required("mongoose");
const { randomUUID } = require("crypto");

const UserSchema = new Schema({
  id: {
    index: true,
    type: ObjectId,
    default: () => randomUUID(),
    required: true,
    unique: true,
  },
  firstname: {
    type: String,
    required: true,
    min: 5,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  adress: {
    type: String,
    required: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
    required: false,
  },
  createDate: {
    type: Date,
    required: false,
  },
});

module.exports = model("User", UserSchema);
