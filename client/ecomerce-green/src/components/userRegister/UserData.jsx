import "./../../styles/UserData.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { validations } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/logo.svg";
import Error from "../Error";

import { registerUser, verifyJwt } from "../../redux/store/authv/authActions";

import { reset } from "../../redux/store/authv/authSlicev";
import useShowAlert from "../../hooks/useShowAlert";

const UserData = () => {
  const { userToken, error, success, loading } = useSelector(
    (state) => state.authv
  );
  const { showError, messageError, showAlert } = useShowAlert();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [icoPassword, setsicoPassword] = useState(false);
  const [icoPassword2, setsicoPassword2] = useState(false);

  // Verificar Token
  useEffect(() => {
    if (!userToken) return;
    dispatch(verifyJwt(userToken));
  }, [userToken, success]);

  useEffect(() => {
    if (success) {
      dispatch(reset());
      navigate("/");
    }

    console.log("success", success);
  }, [success, dispatch]);

  useEffect(() => {
    if (userToken) {
      navigate("/");
    }

    console.log("token", userToken);
  }, [navigate, userToken]);

  const onSubmit = async (data) => {
    const { firstname, lastname, email, password, password_repeat } = data;
    if (password !== password_repeat) {
      showAlert("Las contraseñas no coinciden");
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
    console.log("formData", formData);

    dispatch(registerUser(formData)).then((result) => {
      console.log(result.payload)
      if (result.payload === "Email ya utilizado") {
        showAlert(result.payload);
      }
      if(success){
        navigate("/")
      }
    });
   
if(error){
  showAlert();

}


    // if (success) {
    //   window.location.reload();
    //   navigate("/");
    // }
    console.log(error);
  };

//  Controlador de click 
  const btnScroll = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  }
  
  return (
    <section className="flex   flex-col justify-center  ">
      <div className=" input-container w-[336px] min-h-[400px] justify-center ">
        <div className=" logo sm:mx-auto sm:w-full sm:max-w-sm ">
          <img
            className="mx-auto h-[40px] w-[33px]"
            src={logo}
            alt="Your Company"
          />

          <h2 className="mt-1 text-white  text-center text-1xl  leading-9 tracking-tight text-white-200">
            GreenIX
          </h2>
          <p className="text-center mt-1 title">Registra tus datos</p>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-auto">
            <Error
              error={error}
              messageError={messageError}
              showError={showError}
            />
            {/* Fistname */}
            <div className="p-2">
              <div className="w-56 left-8 relative group">
                <input
                  id="miFirstname"
                  name="firstname"
                  type="text"
                  required
                  className={` ${
                    errors.firstname ? "border-error" : "form"

                  } border-b-3 w-full text-white  border-b-2 text-sm peer outline-none`}

       

                  autoComplete="firstname"
                  {...register("firstname", { required: true })}
                  aria-invalid={errors.firstname ? "true" : "false"}
                />

                <label
                  htmlFor="miFirstname"
                  className=" title transform cursor-pointer transition-all text-white absolute pb-2 size-14px  top-0 left-0 h-full flex items-center  text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0 shadow-sm  sm:text-sm sm:leading-6"
                >
                  Nombre
                </label>
              </div>
              {errors.firstname && (
                <div className="pl-8">
                  <div
                    className="flex w-56 items-center bg-red-400 text-red-800 text-sm font-bold pl-12 pr-10"
                    role="alert"
                  >
                    <svg
                      className="fill-current w-4 h-4 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
                    </svg>
                    <p role="alert">{errors.firstname.message}</p>
                  </div>
                </div>
              )}
            </div>
            {/* Lastname */}
            <div className="p-2">
              <div className="w-56 left-8 relative group">
                <input
                  id="miLastname"
                  name="lastname"
                  type="text"
                  autoComplete="lastname"
                  required
                  className={` ${
                    errors.lastname ? "border-error" : "form"

                  } border-b-3 w-full text-white border-b-2 text-sm peer outline-none`}


                  {...register("lastname", { required: true })}
                  aria-invalid={errors.lastname ? "true" : "false"}
                />

                <label
                  htmlFor="miLastname"
                  className=" title cursor-pointer transform transition-all text-white absolute pb-2 size-14px  top-0 left-0 h-full flex items-center  text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0 shadow-sm  sm:text-sm sm:leading-6"
                >
                  Apellido
                </label>
              </div>
              {errors.lastname && (
                <div className="pl-8">
                  <div
                    className="flex w-56 items-center bg-red-400 text-red-800 text-sm font-bold pl-12 pr-10"
                    role="alert"
                  >
                    <svg
                      className="fill-current w-4 h-4 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
                    </svg>
                    <p role="alert">{errors.lastname.message}</p>
                  </div>
                </div>
              )}
            </div>
            {/* email */}
            <div className="p-2">
              <div className="w-56 left-8 relative group">
                <input
                  id="miEmail"
                  name="email"
                  type="text"
                  required
                  autoComplete="email"
                  className={` ${
                    errors.email ? "border-error" : "form"
                  } border-b-3 w-full text-white border-b-2  text-sm peer outline-none`}

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
              </div>
              {errors.email && (
                <div className="pl-8">
                  <div
                    className="flex w-56 items-center bg-red-400 text-red-800 text-sm font-bold pl-12 pr-10"
                    role="alert"
                  >
                    <svg
                      className="fill-current w-4 h-4 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
                    </svg>
                    <p role="alert">{errors.email.message}</p>
                  </div>
                </div>
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
                  required
                  className={` ${
                    errors.password ? "border-error" : "form"

                  } border-b-3 w-full text-white border-b-2  text-sm peer outline-none`}


                  {...register("password", {
                    required: "Este campo es requerido",
                    minLength: { value: 6, message: "Contraseña no valida" },
                    validate: (value) => {
                      const result = validations.isPassword(value);
                      if (result.errors) {
                        return result.errors;
                      }
                      return true; // Indicar que la validación ha pasado
                    },
                  })}
                />

                <label
                  htmlFor="password"
                  className=" title cursor-pointer transform transition-all text-white  absolute pb-2 top-0 left-0 h-full flex items-center  text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0 shadow-sm  sm:text-sm sm:leading-6"
                >
                  Contraseña
                </label>
              </div>
              {errors.password && (
                <div className="pl-8">
                  <div
                    className="flex w-56 items-center bg-red-400 text-red-800 text-sm font-bold pl-12 pr-10"
                    role="alert"
                  >
                    <svg
                      className="fill-current w-4 h-4 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
                    </svg>
                    <p role="alert">{errors.password.message}</p>
                  </div>
                </div>
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
                  required
                  autoComplete="current-password_repeat"
                  className={` ${
                    errors.password_repeat ? "border-error" : "form"

                  } border-b-3 w-full text-white border-b-2 text-sm peer outline-none`}

                  {...register("password_repeat", {
                    required: "Este campo es requerido",
                    minLength: { value: 6, message: "Contraseña invalida" },
                    validate: (value) => {
                      const result = validations.isPassword(value);
                      if (result.errors) {
                        return result.errors;
                      }
                      return true; // Indicar que la validación ha pasado
                    },
                  })}
                />

                <label
                  htmlFor="password_repeat"
                  className=" title cursor-pointer transform transition-all text-white  absolute pb-2 top-0 left-0 h-full flex items-center  text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0 shadow-sm  sm:text-sm sm:leading-6"
                >
                  Repetir contraseña
                </label>
              </div>
              {errors.password_repeat && (
                <div className="pl-8">
                  <div
                    className="flex w-56 items-center bg-red-400 text-red-800 text-sm font-bold pl-12 pr-10"
                    role="alert"
                  >
                    <svg
                      className="fill-current w-4 h-4 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
                    </svg>
                    <p role="alert">{errors.password_repeat.message}</p>
                  </div>
                </div>
              )}
            </div>
            <div className="text-sm flex justify-center">
              <a href="#" className="title">
                ¿Has olvidado tu contraseña?
              </a>
            </div>

            <div className="flex justify-center ">
              <button
              onClick={btnScroll}
                type="submit"
                className="flex w-[160px] h-[40px] justify-center rounded-md bg-[#F8924F99] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#F8924F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              >
                {loading ? "Loading" : "Registrarse"}
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
