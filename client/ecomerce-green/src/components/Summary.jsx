import { useEffect } from "react";
import "../styles/sumary.css";
import SumaryImg from "../assets/sumaryImg.png";
import { useSelector, useDispatch } from "react-redux";
import { updateTotal } from "../redux/store/cart/cartSlice";
import FormSumary from "./summary/FormSumary";

const Summary = ({ orderValues, editable }) => {
  const dispatch = useDispatch();
  const { cart, total } = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(updateTotal());
  }, [cart]);
  updateTotal;
  const summaryValues = orderValues ? orderValues : { products: cart, total };

  console.log("orden summary", summaryValues);
  console.log(editable);
  return (
    <div className="container-sumary">
      <section className="section-1-sumary ">
        <h2 className="text-titulo">
          Estas a solo un paso de <br /> ayudar al mundo
        </h2>
        <img src={SumaryImg} alt="" />
      </section>
      <section className="section-2-sumary">
        <h2 className="h2-section">Resumen de compra</h2>
        <p></p>
        <ul>
          <li className="titulo-tabla">
            <p className="w-p">Producto</p>
            <p className="w-p-cantidad j-c-center">Cantidad</p>
            <p className="w-p-precio j-c-end">Precio</p>
          </li>
          <li>
            {cart.map((product) => (
              <ul key={product.productId} className="detalle-ul">
                <li className="w-p">
                  <strong>{product.name}</strong>
                </li>
                <li className="w-p-cantidad j-c-center">
                  <strong>{product.quantity}</strong>
                </li>
                <li className="w-p-precio j-c-end">
                  <strong>${product.subtotal}</strong>
                </li>
              </ul>
            ))}
          </li>
        </ul>
        <hr className="hr-1" />
        <h3 className="h2-section">Total</h3>
        <section>
          <h2 className="h2-section mt-7">Datos comprador</h2>
          <hr className="hr-1" />
          {editable ? (
          <FormSumary summaryValues={summaryValues}/>
          ) : (
            <>
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
            </>
          )}
        </section>
      </section>
    </div>
  );
};

export default Summary;
