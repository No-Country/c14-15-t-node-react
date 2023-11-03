import MainLayout from "../../components/MainLayout";

import HeroStore from "../../components/HeroStore";
import Summary from "../../components/Summary";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const SumarryOrder = () => {
  const { user } = useSelector((state) => state.authv);
  let userName = user?.firstname;

  useEffect(() => {
    localStorage.removeItem('cart');
   
  }, []);
  const order = JSON.parse(localStorage.getItem("order")) ?? {};
  console.log("orden", order);
  return (
    <MainLayout>
      <HeroStore />
      <Summary
        title={"Hola, " + userName}
        orderValues={order}
        subtitle={"Puedes encontrar los detalles de tu pedido abajo"}
      />
    </MainLayout>
  );
};

export default SumarryOrder;
