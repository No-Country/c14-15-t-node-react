import MainLayout from "../../components/MainLayout";

import HeroStore from "../../components/HeroStore";
import Summary from "../../components/Summary";

const CheckoutPage = () => {


  return (
    <MainLayout>
      <HeroStore />
      <Summary title={'Resumen de compra'} editable={true}/>
    </MainLayout>
  );
};

export default CheckoutPage;
