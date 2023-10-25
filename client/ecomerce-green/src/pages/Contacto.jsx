import MainLayout from "../components/MainLayout";
import "../styles/Contacto.css"
import { useForm } from "react-hook-form";
import { validations } from "../utils";

export const Contacto = () => {
  const {
    register,
     handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ({
    firstname,
    lastname,
    email,
    // select,
    // textarea,
  
  }) => {
    if (onSubmit) {
      alert("Los campos no puede estar vacio ");
    } else {
      console.log("data", {
        firstname,
        lastname,
        email,
        // select,
        // textarea,

      });
      
    }
  };


  return (
    <MainLayout>
      <main className="container-contacto flex justify-center">
        <div className="flex  min-h-full  flex-col justify-center  sm:py-32  px-6 lg:py-12 lg:px-8 ">
          <div className="input-container lg:w-[640px] lg:min-h-[410px]   justify-center w-[288px] min-h-[496px] ">
            <div className=" logo sm:mx-auto  sm:max-w-sm ">
              <img
                className="mx-auto h-[40px] w-[33px]"
                src="/src/assets/logo.svg"
                alt="Your Company"
              />
              <h2 className="mt-1 text-center text-1xl  leading-9 tracking-tight text-white-200">
                GreenIX
              </h2>
            </div>
            <div className="mt-5 sm:mx-auto sm:w-full ">
              <from className="from w-auto sm:flex-column"
               onSubmit={handleSubmit(onSubmit)}
                action="#"
                method="POST"
              >
                <div className="p-2">
                  <div className="lg:w-60 left-10 relative group bg-inherit w-50">
                    {/* Nombre */}
                    <input
                      type="text"
                      autoComplete="firstname"
                      name="firstname"
                      required
                      className={`${
                        errors.firstname ? "border-error" : "form"
                        }  w-full bg-inherit text-white px-4 text-sm peer  outline-none`}
                      {...register("firstname", { required: true })}
                      aria-invalid={errors.firstname ? "true" : "false"}
                    />

                    <label
                      htmlFor="firstname"
                      className=" title transform transition-all text-white absolute pb-2 size-14px  top-0 left-0 h-full flex items-center  text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0 shadow-sm  sm:text-sm sm:leading-6"
                    >
                      Nombre
                    </label>
                    {errors.firstname?.type === "required" && (
                      <p className="px-4 text-red-600 text-xs" role="alert"> El campo nombre  es requerido</p>
                    )}
                  </div>
                </div>

                {/* Apellido */}
                <div className="p-2">
                  <div className="lg:w-60 left-10 relative group flex flex-row-reverse w-50">
                    <input
                      name="lastname"
                      type="text"
                      autoComplete="lastname"
                      required
                      className={` ${
                        errors.lastname ? "border-error" : "form"
                        } border-b-3 w-full text-white  px-4 text-sm peer outline-none`}
                      {...register("lastname", {
                        required: true})}
                        aria-invalid={errors.lastname ? "true" : "false"}
                    />

                    <label
                      htmlFor="lastname"
                      className=" title transform transition-all text-white  absolute pb-2 top-0 left-0 h-full flex items-center  text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0 shadow-sm  sm:text-sm sm:leading-6">
                      Apellido
                    </label>
                  </div>
                  {errors.lastname?.type === "required" && (
                    <p className="pl-12 text-red-600 text-xs" role="alert">El campo apellido es requerido</p>
                  )}
                </div>


                {/* Email */}
                <div className="p-2">
                  <div className="lg:w-60 left-10 relative group bg-inherit w-50">
                    <input
                      type="email"
                      autoComplete="email"
                      name="email"
                      required
                      className={`${errors.email ? "border-error" : "form"
                        }  w-full bg-inherit text-white px-4 text-sm peer  outline-none`}
                      {...register("email", {
                        required: "Este campo es requerido",
                        validate: validations.isEmail,
                      })}
                    />

                    <label
                      htmlFor="email"
                      className=" title transform transition-all text-white absolute pb-2 size-14px  top-0 left-0 h-full flex items-center  text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0 shadow-sm  sm:text-sm sm:leading-6"
                    >
                      Email
                    </label>
                    {errors.email && errors.email.type === "required" && (
                      <p className="px-4 text-red-600 text-xs" role="alert">
                        {errors.email.message}
                      </p>
                    )}

                  </div>
                </div>

                <div className="sm:col-span-2 flex left-5">

                  <div className="select-container lg:w-60 left-10  relative group w-50-sm ">
                    <div className="absolute inset-y-0 left-0 items-center">
                      <select  id="select" name="select" className="select-input h-full w-[190px] lg:w-[230px] cursor-pointer text-white  border-0 bg-transparent  py-0  text-white-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm">
                        <option className="text-black cursor-pointer">Me comunico por</option>
                        <option className="text-black cursor-pointer">Consultas</option>
                        <option className="text-black cursor-pointer">Reclamos</option>
                        <option className="text-black">Sugencia</option>
                      </select>
                      <svg className="cursor-pointer absolute right-3 top-0 h-full w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      </svg>
                    </div>
                    <input
                      type="text"
                      autoComplete="select"
                      name="select"
                      required
                      className={`${errors.select ?
                        "border-error" : "form"
                        }  w-full bg-inherit text-white px-4 text-sm peer  outline-none`}
                      {...register("select", {
                        required: "Este campo es requerido",
                      })}
                    />

                  </div>
                </div>
                      {/*Comentario  */}
                <div className="p-2">
                  <div className="lg:w-[538px] w-[190px]  left-10 relative group flex flex-row-reverse">
                    <textarea
                      name="textarea"
                      type="text"
                      autoComplete="text"
                      required
                      className={` ${errors.textarea ? "border-error" : "form"
                        } border-b-3 w-full text-white  px-4 text-sm peer resize-none outline-none`}
                      {...register("textarea", {
                        required: "Este campo es requerido",
                        minLength: { value: 6, message: "Mínimo 6 caracteres" },
                      })}
                    />

                    <label
                      htmlFor="password"
                      className=" title transform transition-all text-white  absolute pb-2 top-0 left-0 h-full flex items-center  text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0 shadow-sm  sm:text-sm sm:leading-6">
                      Dejanos tu comentario
                    </label>
                  </div>
                  {errors.password && (
                    <p className="pl-12 text-red-600 text-xs" role="alert">
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <div className="flex justify-center w-[100%] mb-8">
                  <button
                    type="submit"
                    className="   flex w-[160px] h-[40px] justify-center rounded-md bg-[#F8924F99] px-3 py-1.5 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-[#F8924F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                  >
                    Enviar
                  </button>
                </div>
              </from>
            </div>
          </div>
        </div>

      </main>

    </MainLayout>
  )

}




