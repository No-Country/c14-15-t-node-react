import { useParams } from "react-router-dom";

const Categoryv = () => {
  const { category } = useParams();

  // Ahora puedes acceder al valor "Celulares" en la variable "category"

  return (
    <div>
      <h1>Categoría: {category}</h1>
      {/* Resto de la lógica del componente */}
    </div>
  );
};

export default Categoryv;
