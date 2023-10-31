import React from "react";
import { useForm } from "react-hook-form";
const FormSumary = ({ summaryValues }) => {
  console.log("desde el formulario", summaryValues);
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("data", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} action="">
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
            for="firstname"
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
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold  md:text-left mb-1 md:mb-0 pr-4"
            for="inline-full-name"
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
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
            for="inline-full-name"
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
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
            for="inline-full-name"
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
      <div class="md:flex md:items-center">
        <button type={"submit"} className="btn-sumary">
          Comprar
        </button>
      </div>
    </form>
  );
};

export default FormSumary;
