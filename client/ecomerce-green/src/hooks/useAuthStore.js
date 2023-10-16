import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import pageApi from "../api/pageApi";
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store";

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  
  const startLogin = async ({ email, password }) => {
    dispatch(onChecking());
    try {
      const { data } = await pageApi.post("/auth", { email, password });

      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-date", new Date().getTime());
      dispatch(
        onLogin({ name: data.name, uid: data.uid })
      );
      navigateTo(`/profile`);
    } catch (error) {
      Swal.fire("Error en la autenticación", error.response.data?.msg, "error");
      dispatch(onLogout("Credenciales incorrectas"));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
  };

  const startRegister = async (User) => {
    dispatch(onChecking());
    try {
      const { data } = await pageApi.post("/auth/register", { ...User });

      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-date", new Date().getTime());
      dispatch(
        onLogin({ name: data.name, uid: data.uid})
      );
      Swal.fire(
        "Usuario creado correctamente",
        "Por favor complete su perfil",
        "success"
      );
      navigateTo(`/profile/${data.uid}`);
    } catch (error) {
      Swal.fire("Error al crear usuario", error.response.data?.msg, "error");
      dispatch(
        onLogout(error.response.data?.msg || "add valid email or password")
      );
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
  };

  const startLogout = () => {
    localStorage.clear();
    dispatch(onLogout());
  };

  const checkAuthToken = async () => {
    const token = localStorage.getItem("token");

    if (!token) return dispatch(onLogout());

    try {
      const { data } = await pageApi.get("auth/renew");
      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-date", new Date().getTime());
      dispatch(onLogin({ name: data.name, uid: data.uid }));
    } catch (error) {
      localStorage.clear();
      dispatch(onLogout());
    }
  };

  return {
    status,
    user,
    errorMessage,
    checkAuthToken,
    startLogin,
    startLogout,
    startRegister,
  };
};
