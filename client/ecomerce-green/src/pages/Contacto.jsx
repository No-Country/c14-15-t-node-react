// import React, { useState } from 'react';
import MainLayout from "../components/MainLayout";
import "../styles/Contacto.css"
import { useForm } from "react-hook-form";
import { validations } from "../utils";
//  import axios from "axios";

export const Contacto = () => {

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm()

  const onSubmit =  (data) => {
     console.log(data) 
  }
  // const ContactForm = document.querySelectorAll(".from")    
  // ContactForm.addEventListener("submit", handleSubmit)

  // function handleSubmit (event){
  //   event.preventDefault()
  //   // const form = new FormData(this)
  // }

  
  
  return (
    <MainLayout>
    
      <main className="container-contacto flex justify-center">
        <div className="flex  min-h-full  flex-col justify-center  sm:py-32  px-6 lg:py-12 lg:px-8 ">
          <div className="input-container md:w-[640px] md:min-h-[410px]  justify-center w-[288px] min-h-[496px] ">
            <div className=" logo sm:mx-auto  sm:max-w-sm ">
              <img
                className="mx-auto h-[40px] w-[33px]"
                src="/src/assets/logo.svg"
                alt="Your Company"
              />
              <h2 className="mt-1  text-center text-1xl  leading-9 tracking-tight text-white">
                GreenIX
              </h2>
            </div>
            <div className="mt-5 sm:mx-auto sm:w-full ">
              <form className="from w-auto "
                onSubmit={handleSubmit(onSubmit)}
                action="https://formspree.io/f/xdorbbdl"
                method="POST">

              
                <div className="p-2">
                  <div className="md:w-60  left-10  relative group bg-inherit w-50">
                    {/* Nombre */}
                    <input
                      id="miFirstname"
                      type="text"
                      autoComplete="firstname"
                      name="firstname"
                     
                      required
                      className={`${errors.firstname ? "border-error" : "form"
                        }  w-full bg-inherit text-white  text-sm peer  outline-none`}
                      {...register("firstname", { required: true })}
                      aria-invalid={errors.firstname ? "true" : "false"}
                    />

                    <label
                      htmlFor="miFirstname"
                      className=" title cursor-pointer  transform transition-all text-white absolute pb-2 size-14px  top-0 left-0 h-full flex items-center  text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0 shadow-sm  sm:text-sm sm:leading-6"
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
                  <div className="md:w-60 left-10 relative group flex flex-row-reverse w-50">
                    <input
                      id="miLastname"
                      name="lastname"
                      type="text"
                      autoComplete="lastname"
                      required
                      className={` ${errors.lastname ? "border-error" : "form"
                        } border-b-3 w-full text-white   text-sm peer outline-none`}
                      {...register("lastname", {
                        required: true
                      })}
                      aria-invalid={errors.lastname ? "true" : "false"}
                    />

                    <label
                      htmlFor="miLastname"
                      className=" title cursor-pointer transform transition-all text-white  absolute pb-2 top-0 left-0 h-full flex items-center  text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0 shadow-sm  sm:text-sm sm:leading-6">
                      Apellido
                    </label>
                  </div>
                  {errors.lastname?.type === "required" && (
                    <p className="pl-12 text-red-600 text-xs" role="alert">El campo apellido es requerido</p>
                  )}
                </div>


                {/* Email */}
                <div className="p-2 md:flex md:gap-12 items-center lg:mt-0 flex-wrap ">
                  <div className="md:w-60 w-50 left-10 relative group">
                    <input
                      id="miEmail"
                      name="email"
                      type="text"
                      required
                      // onChange={handleInputChange}
                      autoComplete="email"
                      className={` ${errors.email ? "border-error" : "form"
                        } border-b-3 w-full text-white   text-sm peer outline-none`}
                      {...register("email", {
                        required: "Este campo es requerido",
                        validate: validations.isEmail,
                      })}
                    />

                    <label
                      htmlFor="miEmail"
                      className=" title cursor-pointer transform transition-all text-white absolute pb-2 size-14px  top-0 left-0 h-full flex items-center  text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0 shadow-sm  sm:text-sm sm:leading-6"
                    >
                      Email
                    </label>
                    {errors.email && errors.email.type === "required" && (
                      <p className="px-4 text-red-600 text-xs" role="alert">
                        {errors.email.message}
                      </p>
                    )}

                  </div>

                  <div className="sm:col-span-2 md:p-2 md:mt-0 mt-12">
                    <div className=" md:w-60 left-10  relative group w-50 ">
                      <div className=" absolute inset-y-0 flex  items-center ">
                        <select {...register("message", {
                          required: "true",
                        }
                        )}
                          className="select-input w-[200px] md:w-[240px] cursor-pointer  border-b-2 text-white border-0 bg-transparent  py-1  text-white-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm" >
                           
                           <option className="text-black" value="comunico" >Me comunico por</option>   
                          <option className="text-black" value="reclamos">Reclamos</option>
                          <option className="text-black" value="Consultas">Consultas</option>
                          <option className="text-black" value="sugerencias">Sugerencias</option>

                        </select>
                        <svg className="cursor-pointer absolute right-3 top-0 h-full w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        </svg>
                        {errors.message && (
                          <p className=" border-error pl-12 text-red-600 text-xs" role="alert">
                            {errors.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/*Comentario  */}
                <div className="p-2">
                  <div className="md:w-[538px] w-[200px]  left-10 relative group flex flex-row-reverse">
                    <textarea
                      id="miObservation"
                      name="observation"
                      rows="4"
                      cols="50"
                      autoComplete="text"
                      required
                      className={` ${errors.observation ? "border-error" : "form"
                        } border-b-3 w-full text-white   text-sm peer resize-none outline-none`}
                      {...register("observation", {
                        required: "Este campo es requerido",
                        minLength: { value: 6, message: "Mínimo 6 caracteres" },
                      })}
                    />

                    <label
                      htmlFor="miObservation"
                      className=" title cursor-pointer transform transition-all text-white  absolute pb-2 top-0 left-0 h-full flex items-center  text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0 shadow-sm  sm:text-sm sm:leading-6">
                      Dejanos tu comentario
                    </label>
                  </div>
                  {errors.observation && (
                    <p className="pl-12 text-red-600 text-xs" role="alert">
                      {errors.observation}
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
              </form>
            </div>
          </div>
        </div>

      </main>

    </MainLayout>
  );
}




