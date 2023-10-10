const z = require("zod");

const userSchema = z.object({
  firstname: z
    .string({
      invalid_type_error: "El nombre debe ser letras",
      required_error: "El nombre es requerido.",
    })
    .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ']+([- ][A-Za-zÀ-ÖØ-öø-ÿ']+)*$/, {
      message: "Tu nombre debe estar bien escrito",
    })
    .trim(),
  lastname: z
    .string({
      invalid_type_error: "El apellido debe ser letras",
      required_error: "El apellido es requerido.",
    })
    .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ']+([- ][A-Za-zÀ-ÖØ-öø-ÿ']+)*$/, {
      message: "Tu nombre debe estar bien escrito",
    })
    .trim(),
  email: z
    .string()
    .email({
      message: "Este no es un email valido",
    })
    .min(5),
  password: z
    .string()
    .regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]+$/, {
      message: "Tu contraseña no cumple los requisitos",
    })
    .trim(),
  adress: z.optional(
    z.string({
      invalid_type_error: "La direccion debe ser solo letras",
    })
  ),
});

const validatorUser = (body) => {
  return userSchema.safeParse(body);
};

// const validatorUserPartial = (body) => {
//   return userSchema.partial().safeParse(body);
// };

module.exports = validatorUser;
