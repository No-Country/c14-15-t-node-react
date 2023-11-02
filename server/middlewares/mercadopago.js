const mercadopago = require("mercadopago");
const { config } = require("dotenv");

config();

mercadopago.configure({
  access_token: process.env.ACCESS_TOKEN_MP,
});

const mercadopagoAPI = async (preference) => {
  return await mercadopago.preferences.create(preference);
};

module.exports = mercadopagoAPI;
