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
      : 'Correo no valido';
  }




  export const isValidPassword = (message) => {
    const isPassword = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[a-zA-Z0-9!@#$%^&*()_+]+$/.test(message);
   
  
    let errorString = '';
  
    if (!isPassword ) {
      errorString += 'Contraseña invalida';
    }
  
    return {
      match: `${isPassword || ''}`,
      errors: errorString.trim(),
    };
  };

  export const isPassword = (password) => {
    return isValidPassword(password) 
     
  }

