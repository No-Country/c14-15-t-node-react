const z = require("zod");

const userSchema = z.object({
  uid: z.string().optional().readonly(),
  firstname: z
    .string()
    .regex(/^[A-Z][a-zA-Z]*$/, {
      message: "Tu nombre no cumple los requisitos",
    })
    .trim()
    .min(3)
    .max(20),
  lastname: z
    .string()
    .regex(/^[A-Z][a-zA-Z]*$/, {
      message: "Tu nombre no cumple los requisitos",
    })
    .trim()
    .min(3)
    .max(20),
  email: z
    .string()
    .email({
      message: "Este no es un email valido",
    })
    .min(10),
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
  address: z.optional(z.string()),
});

const validatorUser = (body) => {
  return userSchema.safeParse(body);
};

const validatorPartialUser = (body) => {
  return userSchema.partial().safeParse(body);
};

module.exports = { validatorUser, validatorPartialUser };
