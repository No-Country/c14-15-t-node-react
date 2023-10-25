import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import MainLayout from "../components/MainLayout";
import "../styles/login.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { validations } from "../utils";
import { useDispatch, useSelector } from "react-redux";
import { userLogin, verifyJwt } from "../redux/store/authv/authActions";
import logo from "../assets/logo.svg";
import useShowAlert from "../hooks/useShowAlert";
import Error from "../components/Error";

export const Login = () => {
  const dispatch = useDispatch();
  const { userInfo, loading, error, userToken, success, isAuthenticated } = useSelector(
    (state) => state.authv
  );

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { showError, messageError, showAlert } = useShowAlert();


  
  // 
  useEffect(() => {
    if (!userToken) return;

    dispatch(verifyJwt(userToken));
    console.log(userToken)
  }, [userToken, success]);

  useEffect(() => {
    if(userToken){
      navigate('/')
    }
    // console.log("user", userInfo);
    console.log("token", userToken);
  }, [userToken]);
  
  useEffect(() => {
    if (isAuthenticated) {
      // Cuando isAuthenticated se convierte en true, la autenticación se ha completado.
      // Puedes realizar acciones aquí, como redirigir al usuario o recargar la página.
      window.location.reload();
      navigate('/');
    }
  }, [isAuthenticated]);
  




  const [icoPassword, setsicoPassword] = useState(false);

  const onSubmit = (data) => {
    console.log("data", data);
    dispatch(userLogin(data));
    console.log(isAuthenticated)
  
    showAlert();
    if (isAuthenticated) {
      window.location.reload()
      navigate('/');
    }
   
    console.log("error", error);
  };
  return (
    <MainLayout>
      <main className="container-login flex justify-center ">
        <div className="flex  min-h-full  flex-col justify-center px-6 py-12 lg:px-8">
          <div className=" input-container w-[336px] min-h-[400px]  justify-center ">
            <div className=" logo sm:mx-auto sm:w-full sm:max-w-sm ">
              <img
                className="mx-auto h-[40px] w-[33px]"
                src={logo}
                alt="Your Company"
              />

              <h2 className="mt-1 text-center text-1xl  leading-9 tracking-tight text-white-200">
                GreenIX
              </h2>
              <p className="text-center mt-1 title">Ingresa tus datos</p>
            </div>

            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
                action="#"
                method="POST"
              >
                <Error
                  error={error}
                  messageError={messageError}
                  showError={showError}
                />
                <div className="p-2">
                  <div className="w-56 left-8 relative group">
                    <input
                      type="text"
                      autoComplete="email"
                      name="email"
                      required
                      className={`${
                        errors.email ? "border-error" : "form"
                      }  w-full text-white px-4 text-sm peer  outline-none`}
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
                    {errors.email && (
                      <p className="px-4 text-red-600 text-xs" role="alert">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

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
                      name="password"
                      type={icoPassword ? "text" : "password"}
                      autoComplete="current-password"
                      required
                      className={` ${
                        errors.password ? "border-error" : "form"
                      } border-b-3 w-full text-white  px-4 text-sm peer outline-none`}
                      {...register("password", {
                        required: "Este campo es requerido",
                        minLength: { value: 6, message: "Mínimo 6 caracteres" },
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
                    Ingresar
                  </button>
                </div>
              </form>

              <p className="mt-5 mb-2 text-center text-sm title">
                ¿No estas registrado?{" "}
                <Link
                  to="/register"
                  className="font-semibold leading-6 text-orange-600 hover:text-orange-500"
                >
                  Crear cuenta
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </MainLayout>
  );
};
