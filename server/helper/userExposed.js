const jwt = require("jsonwebtoken");
const User = require("../Schema/UserSchema");

const userExposed = async (req, res, next) => {
  const authorization = req.header("Authorization");
  let token = "";
  let userValid = "";

  if (authorization && authorization.toLowerCase().startsWith("bearer")) {
    token = authorization.substring(7);
  }

  if (!token) {
    return res.status(401).json({
      error: true,
      message: "No existe una request correcta",
    });
  }

  try {
    const decodeToken = jwt.verify(token, process.env.JWT_SECRET);
    userValid = await User.findOne({ uid: decodeToken.uid });

    if (!userValid) {
      return res.status(400).json({
        error: true,
        data: { message: "Usuario no valido. Contacte al soporte del sitio" },
      });
    }
    req.uid = userValid.uid;
    req.isAdmin = userValid.isAdmin;
  } catch (error) {
    return res.status(500).json({
      error: true,
      data: { message: "Credenciales invalidas" },
    });
  }

  next();
};

module.exports = userExposed;
