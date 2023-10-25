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


// export const isValidPassword = (email) => {
  
//     const match = String(email)
//         .toLowerCase()
//         .match(
//           /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[a-zA-Z0-9!@#$%^&*()_+]+$/
//         );
  
//       return !!match;
//   };
  // export const isPassword = (password) => {
  //   return isValidPassword(password) 
  //     ? undefined
  //     : 'La contraseña no cumple con los requisitos';
  // }

  export const isValidPassword = (message) => {
    const uppercaseLetters = message.match(/[A-Z]/g);
    const numbers = message.match(/[0-9]/g);
    const specialChars = message.match(/[!@#$%^&*()_+]/g);
    const letters = message.match(/[a-zA-Z]/g);
  
    let errorString = '';
  
    if (!uppercaseLetters) {
      errorString += 'El mensaje no contiene letras mayúsculas. ';
    }
  
    if (!numbers) {
      errorString += 'El mensaje no contiene números. ';
    }
  
    if (!specialChars) {
      errorString += 'El mensaje no contiene caracteres especiales. ';
    }
  
    return {
      match: `${uppercaseLetters || ''}${numbers || ''}${specialChars || ''}${letters || ''}`,
      errors: errorString.trim(),
    };
  };

  export const isPassword = (password) => {
    return isValidPassword(password) 
     
  }
