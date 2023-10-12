const z = require("zod");

const userSchema = z.object({
  uid: z.string().optional().readonly(),
  firstname: z
    .string({
      invalid_type_error: "El nombre debe ser letras",
      required_error: "El nombre es requerido.",
    })
    .regex(/^[A-Z][a-zA-Z]*$/, {
      message: "Tu nombre debe estar bien escrito",
    })
    .trim(),
  lastname: z
    .string({
      invalid_type_error: "El apellido debe ser letras",
      required_error: "El apellido es requerido.",
    })
    .regex(/^[A-Z][a-zA-Z]*$/, {
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
    .regex(
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[a-zA-Z0-9!@#$%^&*()_+]+$/,
      {
        message: "Tu contraseña no cumple los requisitos",
      }
    )
    .min(6)
    .trim(),
  address: z.optional(
    z.string({
      invalid_type_error: "La direccion debe ser solo letras",
    })
  ),
});

const validatorUser = (body) => {
  return userSchema.safeParse(body);
};

const validatorPartialUser = (body) => {
  return userSchema.partial().safeParse(body);
};

module.exports = { validatorUser, validatorPartialUser };
