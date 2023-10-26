const z = require("zod");

const brandSchema = z.object({
    id: z.string().uuid().optional().readonly(),
    brand: z
        .string({
        invalid_type_error: "El nombre debe ser caracteres de texto",
        required_error: "El nombre es requerido.",
        })
        .regex(/^[A-ZÁÉÍÓÚÜÑ][A-Za-zÁÉÍÓÚÜÑáéíóúüñ]*$/, {
        message: "El nombre debe estar bien escrito",
        }),
    otherBrand: z
        .string({
        invalid_type_error: "El nombre debe ser caracteres de texto",
        required_error: "El nombre es requerido.",
        })
        .regex(/^[A-ZÁÉÍÓÚÜÑ][A-Za-zÁÉÍÓÚÜÑáéíóúüñ]*$/, {
        message: "El nombre debe estar bien escrito",
        })
});
const brandValidator = (body) => {
    return brandSchema.safeParse(body);
}
const brandPartialValidator = (body) => {
    return brandSchema.partial().safeParse(body);
}
module.exports = { brandValidator, brandPartialValidator};