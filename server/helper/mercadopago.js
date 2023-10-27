const mercadopago = require("mercadopago");
const access_token = process.env.ACCESS_TOKEN
const back_urls = {
      success: process.env.success || "http://localhost:5000/api/v1/pay/create",
      failure: process.env.failure || "http://localhost:5000/api/v1/pay/failure",
      pending:process.env.pending || "http://localhost:5000/api/v1/pay/pending"
}
const notification_url = process.env.NOTIFICATIONURL || "https://808e-181-84-157-139.ngrok.io/webhook"
const mercadoPago = async (items) =>{
  mercadopago.configure({
    access_token,
  });

  let preference = {
    items,
    back_urls,
    notification_url
  };

  const response = await mercadopago.preferences.create(preference);
  console.log(response)
  return response
}
module.exports = { mercadoPago}