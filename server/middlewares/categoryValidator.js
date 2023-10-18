const z = require("zod");

const categorySchema = z.object({
  id: z.number().optional().readonly(),
  name: z
    .string({
      invalid_type_error: "El nombre debe ser letras",
      required_error: "El nombre es requerido.",
    })
    .regex(/^[A-ZÁÉÍÓÚÜÑa-záéíóúüñ\s]+$/, {
      message: "Tu nombre debe estar bien escrito",
    }),
});
const categoryValidator = (body) => {
  return categorySchema.safeParse(body);
};
const categoryPartialValidator = (body) => {
  return categorySchema.partial().safeParse(body);
};
module.exports = { categoryValidator, categoryPartialValidator };
