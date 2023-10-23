export const isValidEmail = (email) => {
  
    const match = String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
  
      return !!match;
  };
  export const isEmail = (email) => {
    return isValidEmail(email) 
      ? undefined
      : 'El correo no parece ser válido';
  }


export const isValidPassword = (email) => {
  
    const match = String(email)
        .toLowerCase()
        .match(
          /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[a-zA-Z0-9!@#$%^&*()_+]+$/
        );
  
      return !!match;
  };
  export const isPassword = (password) => {
    return isValidPassword(password) 
      ? undefined
      : 'La contraseña no cumple con los requisitos';
  }