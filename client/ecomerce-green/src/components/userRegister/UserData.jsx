import "./../../styles/UserData.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { validations } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/logo.svg"

import { registerUser } from "../../redux/store/authv/authActions";
const UserData = () => {
  const { loading, userInfo, error, success } = useSelector(
    (state) => state.authv
  );
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [icoPassword, setsicoPassword] = useState(false);
  const [icoPassword2, setsicoPassword2] = useState(false);

  const onSubmit = async (data) => {
    const { firstname, lastname, email, password, password_repeat } = data;
    if (password !== password_repeat) {
      alert("Las contraseñas no coinciden");
    }
    // Capitalizar los nombres
    const capitalizedFirstname =
      firstname.charAt(0).toUpperCase() + firstname.slice(1);

    const capitalizedLastname =
      lastname.charAt(0).toUpperCase() + lastname.slice(1);

    const formData = {
      firstname: capitalizedFirstname,
      lastname: capitalizedLastname,
      email,
      password,
    };
    console.log(formData);

    dispatch(registerUser(formData));
  };

  return (
    <section className="flex   flex-col justify-center  ">
      <div className=" input-container w-[336px] min-h-[400px] justify-center ">
        <div className=" logo sm:mx-auto sm:w-full sm:max-w-sm ">
          <img
            className="mx-auto h-[40px] w-[33px]"
            src={logo}
            alt="Your Company"
          />

          <h2 className="mt-1 text-center text-1xl  leading-9 tracking-tight text-white-200">
            GreenIX
          </h2>
          <p className="text-center mt-1 title">Registra tus datos</p>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-auto">
            {error && <p className="pl-4">{error}</p>}
            <div
              className="fixed z-[10] top-8 right-1 flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-300 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
              role="alert"
            >
              <svg
                className="flex-shrink-0 inline w-4 h-4 mr-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              <span class="sr-only">Error</span>
              <div>Datos erroneos</div>
            </div>
            {/* Fistname */}
            <div className="p-2">
              <div className="w-56 left-8 relative group">
                <input
                  name="firstname"
                  type="text"
                  className={` ${
                    errors.firstname ? "border-error" : "form"
                  } border-b-3 w-full text-white  px-4 text-sm peer outline-none`}
                  autoComplete="firstname"
                  {...register("firstname", { required: true })}
                  aria-invalid={errors.firstname ? "true" : "false"}
                />

                <label
                  htmlFor="firstname"
                  className=" title transform transition-all text-white absolute pb-2 size-14px  top-0 left-0 h-full flex items-center  text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0 shadow-sm  sm:text-sm sm:leading-6"
                >
                  Name
                </label>
              </div>
              {errors.firstname?.type === "required" && (
                <p className="pl-12 text-red-600 text-xs" role="alert">
                  El nombre es requerido
                </p>
              )}
            </div>
            {/* Lastname */}
            <div className="p-2">
              <div className="w-56 left-8 relative group">
                <input
                  name="lastname"
                  type="text"
                  autoComplete="lastname"
                  className={` ${
                    errors.lastname ? "border-error" : "form"
                  } border-b-3 w-full text-white  px-4 text-sm peer outline-none`}
                  {...register("lastname", { required: true })}
                  aria-invalid={errors.lastname ? "true" : "false"}
                />

                <label
                  htmlFor="lastname"
                  className=" title transform transition-all text-white absolute pb-2 size-14px  top-0 left-0 h-full flex items-center  text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0 shadow-sm  sm:text-sm sm:leading-6"
                >
                  Apellido
                </label>
              </div>
              {errors.lastname?.type === "required" && (
                <p className="pl-12 text-red-600 text-xs" role="alert">
                  El apellido es requerido
                </p>
              )}
            </div>
            {/* email */}
            <div className="p-2">
              <div className="w-56 left-8 relative group">
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  className={` ${
                    errors.email ? "border-error" : "form"
                  } border-b-3 w-full text-white  px-4 text-sm peer outline-none`}
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
              </div>
              {errors.email && errors.email.type === "required" && (
                <p className="pl-12 text-red-600 text-xs" role="alert">
                  {errors.email.message}
                </p>
              )}
            </div>
            {/* password */}
            <div className="p-2">
              <div className="w-56 left-8 relative group flex flex-row-reverse">
                <div
                  className="icono flex cursor-pointer w-50%  flex-row-reverse absolute text-white  "
                  onClick={() => setsicoPassword(!icoPassword)}
                >
                  {icoPassword ? (
                    <AiOutlineEye size={20} />
                  ) : (
                    <AiOutlineEyeInvisible size={20} />
                  )}
                </div>
                <input
                  id="password"
                  name="password"
                  type={icoPassword ? "text" : "password"}
                  autoComplete="current-password"
                  className={` ${
                    errors.password ? "border-error" : "form"
                  } border-b-3 w-full text-white  px-4 text-sm peer outline-none`}
                  {...register("password", {
                    required: "Este campo es requerido",
                    minLength: { value: 6, message: "Mínimo 6 caracteres" },
                  })}
                />

                <label
                  htmlFor="password"
                  className=" title transform transition-all text-white  absolute pb-2 top-0 left-0 h-full flex items-center  text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0 shadow-sm  sm:text-sm sm:leading-6"
                >
                  Contraseña
                </label>
              </div>
              {errors.password && (
                <p className="pl-12 text-red-600 text-xs" role="alert">
                  {errors.password.message}
                </p>
              )}
            </div>
            {/* password repeat */}
            <div className="p-2">
              <div className="w-56 left-8 relative group flex flex-row-reverse">
                <div
                  className="icono flex cursor-pointer w-50%  flex-row-reverse absolute text-white  "
                  onClick={() => setsicoPassword2(!icoPassword2)}
                >
                  {icoPassword2 ? (
                    <AiOutlineEye size={20} />
                  ) : (
                    <AiOutlineEyeInvisible size={20} />
                  )}
                </div>
                <input
                  id="password_repeat"
                  name="password_repeat"
                  type={icoPassword2 ? "text" : "password"}
                  autoComplete="current-password_repeat"
                  className={` ${
                    errors.password_repeat ? "border-error" : "form"
                  } border-b-3 w-full text-white  px-4 text-sm peer outline-none`}
                  {...register("password_repeat", {
                    required: "Este campo es requerido",
                    minLength: { value: 6, message: "Mínimo 6 caracteres" },
                    validate: (value) =>
                      value !== password || "La contraseña no coincide",
                  })}
                />

                <label
                  htmlFor="password_repeat"
                  className=" title transform transition-all text-white  absolute pb-2 top-0 left-0 h-full flex items-center  text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0 shadow-sm  sm:text-sm sm:leading-6"
                >
                  Repetir contraseña
                </label>
              </div>
              {errors.password_repeat && (
                <p className="pl-12 text-red-600 text-xs" role="alert">
                  {errors.password_repeat.message}
                </p>
              )}
            </div>
            <div className="text-sm flex justify-center">
              <a href="#" className="title">
                ¿Has olvidado tu contraseña?
              </a>
            </div>

            <div className="flex justify-center ">
              <button
                type="submit"
                className="flex w-[160px] h-[40px] justify-center rounded-md bg-[#F8924F99] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#F8924F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              >
                Registrarse
              </button>
            </div>
          </form>

          <p className="mt-5 mb-2 text-center text-sm title">
            ¿Ya estás registrado?{" "}
            <Link
              to="/login"
              className="font-semibold leading-6 text-orange-600 hover:text-orange-500"
            >
              Ingresar a cuenta
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};
export default UserData;
