import React, { useEffect } from "react";
import "../styles/sumary.css";
import SumaryImg from "../assets/sumaryImg.png";
import { useSelector, useDispatch } from "react-redux";
import { updateTotal } from "../redux/store/cart/cartSlice";
import { format } from "../utils/currency";

const Summary = ({ orderValues, title }) => {
  const dispatch = useDispatch();
  const { cart, total } = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(updateTotal());
  }, [cart]);
  updateTotal;
  const summaryValues = orderValues ? orderValues : { cart, total };

  console.log(cart);
  console.log(total);
  return (
    <div className="container-sumary">
      <section className="section-1-sumary ">
        <h2 className="text-titulo">Estas a solo un paso de ayudar al mundo</h2>
        <img src={SumaryImg} alt="" />
      </section>
      <section className="section-2-sumary">
        <h2>{title}</h2>
        <p></p>
        <ul>
          <li className="titulo-tabla">
            <p>Producto</p>
            <p>Cantidad</p>
            <p>Precio</p>
          </li>
          <li>
            {cart.map((product) => (
              <ul key={product.productId} className="detalle-ul">
                <li>
                  <strong>{product.name}</strong>
                </li>
                <li>
                  <strong>{product.quantity}</strong>
                </li>
                <li>
                  <strong>${product.subtotal}</strong>
                </li>
              </ul>
            ))}

           
          </li>
        </ul>
        <hr className="hr-1" />
        <h3>Total</h3>
        <section>
          <h2>Datos comprador</h2>
          <hr className="hr-1" />
          <div className="continer-data-user">
            <ul className="ul-datos">
              <li className="p-top-boton">Nombre</li>
              <li className="p-top-boton">Apellido</li>
              <li className="p-top-boton">Email</li>
            </ul>

            <ul className="ul-datos">
              <li className="li-datos">
                <strong>Valentina</strong>
              </li>
              <li className="li-datos">
                <strong>Ysis</strong>
              </li>
              <li className="li-datos">
                <strong>Lourdes.carolina@gamil.com</strong>
              </li>
            </ul>
          </div>
          <hr className="hr-1" />
          <div className="continer-data-user">
            <ul className="ul-datos">
              <li className="p-top-boton">Dirección</li>
              <li className="p-top-boton">Documento de identidad</li>
              <li className="p-top-boton">Teléfono</li>
            </ul>
            <ul className="ul-datos">
              <li className="li-datos">Calle 1568</li>
              <hr className="hr-2" />
              <li className="li-datos">30851469</li>
              <hr className="hr-2" />
              <li className="li-datos">+5491166558899</li>
              <hr className="hr-2" />
            </ul>
          </div>
          <button className="btn-sumary">Comprar</button>
        </section>
      </section>
    </div>
  );
};

export default Summary;
