
import MainLayout from '../components/MainLayout'

import HeroStore from "../components/HeroStore";
import Summary from "../components/Summary";

const PurchaseSumary = () => {
  return (
    <MainLayout >
          <HeroStore />
          <Summary title={"Checkout"} />
   
    </MainLayout>
  );
};

export default PurchaseSumary;
