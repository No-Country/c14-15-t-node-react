const jwt = require("jsonwebtoken");

const validatorJWT = (req, res, next) => {
  const token = req.header("x-token");

  if (!token) {
    return res.status(401).json({
      error: true,
      message: "No existe un token valido en la peticion",
    });
  }

  try {
    const { uid } = jwt.verify(token, process.env.JWT_SECRET);
    req.uid = uid;
  } catch (error) {
    return res.status(401).json({
      error: true,
      message: "El Token no es valido",
    });
  }

  next();
};

module.exports = validatorJWT;
