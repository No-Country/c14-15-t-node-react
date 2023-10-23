const jwt = require("jsonwebtoken");
const User = require("../Schema/UserSchema");

const userExposed = async (req, res, next) => {
  // const token = req.header("x-token");
  const authorization = req.header("Authorization");
  let token = "";
  let decodeToken = "";

  if (authorization && authorization.toLowerCase().startsWith("bearer")) {
    token = authorization.substring(7);
  }

  if (!token) {
    return res.status(401).json({
      error: true,
      message: "No existe un token en la request",
    });
  }

  try {
    const decodeToken = jwt.verify(token, process.env.JWT_SECRET);

    const userValid = await User.findOne({ uid: decodeToken.uid });

    if (!userValid) {
      return res.status(401).json({
        error: true,
        data: { message: "Usuario no valido" },
      });
    }
  } catch (error) {
    return res.status(500).json({
      error: true,
      data: { message: "Error interno" },
    });
  }
  req.uid = userValid.uid;
  next();
};

module.exports = userExposed;
