import Fridge from '/Fridge.svg';
import PanelSolar from '/PanelSolar.svg';
import Light from '/Ligth.svg';

const Cards = () => {
        const wraper = `w-[100vw] bg-inherit cards-bg  flex  content-end justify-center items-center lg:flex-row`
    return (

      <section className={wraper}>
        <div className="landing-card ">
          <img src={PanelSolar} alt="panel" />
          <h4>Tu solución brillante para un hogar ecoamigable</h4>
          <p>
            ¡Genera tu propia energía! Con nuestros paneles solares, puedes
            ahorrar hasta un 80% en tu factura de electricidad.
          </p>
        </div>
        <div className="landing-card">
          <img src={Light} alt="ligth" />

          <h4>Una luz amigable con el planeta y tu bolsillo</h4>
          <p>
            Ilumina de forma sostenible. Nuestras bombillas de bajo consumo duran
            hasta 10 veces más y utilizan un 75% menos de energía.
          </p>
        </div>
        <div className="landing-card">
          <img src={Fridge} alt="fridge" />
          <h4>Haz la vida más fácil, sin gastar en exceso</h4>
          <p>
            Eficiencia energética al máximo. Nuestros electrodomésticos de bajo
            consumo pueden reducir tus gastos energéticos en un 50%.
          </p>
        </div>
      </section>
    );
  };
  export default Cards;