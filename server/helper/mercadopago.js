const mercadopago = require("mercadopago");

const mercadoPago = async () =>{
  mercadopago.configure({
    access_token: 'TEST-5573756813779049-102018-553ee837e850fe7218fbcae7702be60f-1458868404',
  });

  let preference = {
    items: [
      {
        id: "item-ID-1234",
        title: "Meu produto",
        currency_id: "BRL",
        picture_url:
          "https://www.mercadopago.com/org-img/MP3/home/logomp3.gif",
        description: "Descrição do Item",
        category_id: "art",
        quantity: 1,
        unit_price: 75.76,
      },
      {
        id: "item-ID-12342",
        title: "Meu produto2",
        currency_id: "BRL",
        picture_url:
          "https://www.mercadopago.com/org-img/MP3/home/logomp3.gif",
        description: "Descrição do Item2",
        category_id: "art2",
        quantity: 1,
        unit_price: 100,
      },
    ],
    back_urls:{
      success:"http://localhost:5000/api/v1/pay/create",
      failure:"http://localhost:5000/api/v1/pay/failure",
      pending:"http://localhost:5000/api/v1/pay/pending"
    },
    notification_url: "https://808e-181-84-157-139.ngrok.io/webhook"
  };

  const response = await mercadopago.preferences.create(preference);
  console.log(response)
  return response
}
module.exports = { mercadoPago}