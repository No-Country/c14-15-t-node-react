const z = require("zod");

const userSchema = z.object({
  firstname: z.string({
    invalid_type_error: "El nombre debe ser letras",
    required_error: "El nombre es requerido.",
  }),
  lastname: z.string({
    invalid_type_error: "El apellido debe ser letras",
    required_error: "El apellido es requerido.",
  }),
  email: z
    .string()
    .email({
      message: "Este no es un email valido",
    })
    .min(5),
  password: z.string(),
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
