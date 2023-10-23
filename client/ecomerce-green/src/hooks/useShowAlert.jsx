import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useShowAlert = () => {
  const { success } = useSelector(
    (state) => state.authv
  );

  const [showError, setShowError] = useState(false);
  const [messageError, setMessageError] = useState(null);

  const handleError = () => {
    setTimeout(() => {
      setShowError(false);
    }, 2500);
  };

  const showAlert = (message = null) => {
    if (!success) {
      if (message === null) {
        setShowError(true);
        handleError();
      }
      if (message) {
        setMessageError(message);
        setShowError(true);
        handleError();
      }
      if(message === null && success){
        setShowError(false);
      }
    }
  };

  return {
    showError,
    messageError,
    showAlert,
  };
};

export default useShowAlert;
