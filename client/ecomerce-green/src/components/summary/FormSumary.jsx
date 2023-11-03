import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


const FormSumary = ({ summaryValues }) => {
  const navigate = useNavigate()
  const products = summaryValues.products.map((product) => {
    let subtotal= product.quantity* product.price
    return {
      productId: product.productId,
      quantity: product.quantity,
      name: product.name,
      price: product.price,
      subtotal,
    };
  });
  const generarID =() => {
    const numeroAleatorio = Math.random();
    const marcaDeTiempo = Date.now(); // Obtén la marca de tiempo actual en milisegundos
  
    // Combina el número aleatorio y la marca de tiempo para crear el ID
    const id = numeroAleatorio.toString(36).substr(2) + marcaDeTiempo.toString(36);
  
    return id;
  }

  const uid = generarID();
  const total = summaryValues.total;
  const total_products = products.reduce(
    (prev, current) => current.quantity + prev,
    0
  );
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const formData = {
      ...data,
      uid,
      total_products,
      products,
      total,
    };
    console.log("formData", formData);
    localStorage.setItem("order", JSON.stringify(formData))

    navigate("/orders")
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} action="">
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
            htmlFor="firstname"
          >
            Nombre
          </label>
        </div>

        <div className="md:w-2/3 border-b-2 border-[#051C12]">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#051C12]"
            id="firstname"
            type="text"
            {...register("firstname", {
              required: "Este campo es requerido",
            })}
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold  md:text-left mb-1 md:mb-0 pr-4"
            htmlFor="inline-full-name"
          >
            Apellido
          </label>
        </div>

        <div className="md:w-2/3 border-b-2 border-[#051C12]">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#051C12]"
            id="inline-full-name"
            type="text"
            {...register("lastname", {
              required: "Este campo es requerido",
            })}
          />
        </div>
      </div>
      <hr className="hr-1" />
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
            htmlFor="inline-full-name"
          >
            Direccion
          </label>
        </div>

        <div className="md:w-2/3 border-b-2 border-[#051C12]">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#051C12]"
            id="inline-full-name"
            type="text"
            {...register("address", {
              required: "Este campo es requerido",
            })}
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
            htmlFor="inline-full-name"
          >
            Telefono
          </label>
        </div>

        <div className="md:w-2/3 border-b-2 border-[#051C12]">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#051C12]"
            type="text"
            {...register("phone", {
              required: "Este campo es requerido",
            })}
          />
        </div>
      </div>
      <div className="md:flex md:items-center">
        <button type={"submit"} className="btn-sumary">
          Comprar
        </button>
      </div>
    </form>
  );
};

export default FormSumary;
