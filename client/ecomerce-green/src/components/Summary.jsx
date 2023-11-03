import { useEffect } from "react";
import "../styles/sumary.css";
import SumaryImg from "../assets/sumaryImg.png";
import { useSelector, useDispatch } from "react-redux";
import { updateTotal } from "../redux/store/cart/cartSlice";
import FormSumary from "./summary/FormSumary";
import { currency } from "../utils";

const Summary = ({ title, orderValues, editable, subtitle }) => {
  const dispatch = useDispatch();
  const { cart, total } = useSelector((state) => state.cart);
  // const { user } = useSelector((state) => state.user);
  // console.log(user)
  useEffect(() => {
    dispatch(updateTotal());
  }, [cart]);

  const calcularTotal = () => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].price * cart[i].quantity;
    }

    return total;
  };

  const totalAPagar = currency.format(calcularTotal());
  const summaryValues = orderValues ? orderValues : { products: cart, total };

  console.log("orden summary", summaryValues);
  console.log(cart);

  console.log(calcularTotal());

  return (
    <div className="container-sumary">
      <section className="section-1-sumary ">
        {editable ? (
          <>
            <h2 className="text-titulo">
              Estas a solo un paso de <br /> ayudar al mundo
            </h2>
          </>
        ) : (
          <h2 className="text-titulo">
            ¡Tu compra fue exitosa!
          </h2>
        )}

        <img src={SumaryImg} alt="" />
      </section>
      <section className="section-2-sumary">
        <h2 className="h2-section">{title}</h2>
        {!editable && (
          <>
            <p>{subtitle}</p>
            <hr className="hr-1" />

            <h2 className="text-[#307C5A]">
              Numero de orden: {orderValues.uid}
            </h2>

            <hr className="hr-1" />
          </>
        )}
        <ul>
          <li className="titulo-tabla">
            <p className="w-p">Producto</p>
            <p className="w-p-cantidad j-c-center">Cantidad</p>
            <p className="w-p-precio j-c-end">Subtotal</p>
          </li>
          <li>
            {summaryValues.products.map((product) => (
              <ul key={product.productId} className="detalle-ul">
                <li className="w-p">
                  <strong>{product.name}</strong>
                </li>
                <li className="w-p-cantidad j-c-center">
                  <strong>{product.quantity}</strong>
                </li>
                <li className="w-p-precio j-c-end">
                  <strong>
                    {currency.format(product.quantity * product.price)}
                  </strong>
                </li>
              </ul>
            ))}
          </li>
        </ul>
        <hr className="hr-1" />

        <div className="flex justify-between">
          <h3 className="h2-section">Total: </h3>
          <h3>$ {summaryValues.total}</h3>
        </div>

        <section>
          <h2 className="h2-section mt-7">Datos comprador</h2>
          <hr className="hr-1" />
          {editable ? (
            <FormSumary summaryValues={summaryValues} />
          ) : (
            <>
              <div className="continer-data-user">
                <ul className="ul-datos">
                  <li className="p-top-boton">Nombre</li>
                  <li className="p-top-boton">Apellido</li>
                  {/* <li className="p-top-boton">Email</li> */}
                </ul>

                <ul className="ul-datos">
                  <li className="li-datos">
                    <strong>{orderValues.firstname}</strong>
                  </li>
                  <li className="li-datos">
                    <strong>{orderValues.lastname}</strong>
                  </li>
                  {/* <li className="li-datos">
                    <strong>Lourdes.carolina@gamil.com</strong>
                  </li> */}
                </ul>
              </div>
              <hr className="hr-1" />
              <div className="continer-data-user">
                <ul className="ul-datos">
                  <li className="p-top-boton">Dirección</li>
                  {/* <li className="p-top-boton">Documento de identidad</li> */}
                  <li className="p-top-boton">Teléfono</li>
                </ul>
                <ul className="ul-datos">
                  <li className="li-datos">{orderValues.address}</li>
                  {/* <hr className="hr-2" />
                  <li className="li-datos">{orderValues}</li> */}
                  <hr className="hr-2" />
                  <li className="li-datos">{orderValues.phone}</li>
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
