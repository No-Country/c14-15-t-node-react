const z = require("zod");

const categorySchema = z.object({
    categoryId: z.string().uuid().optional().readonly(),
    name: z
        .string({
        invalid_type_error: "El nombre debe ser letras",
        required_error: "El nombre es requerido.",
        })
        .min(5)
        .regex(/^[A-ZÁÉÍÓÚÜÑ][A-Za-zÁÉÍÓÚÜÑáéíóúüñ]*$/, {
        message: "El nombre debe estar bien escrito",
        }),
    brands: z
        .array(z
            .string()
            .regex(/^[A-ZÁÉÍÓÚÜÑ][A-Za-zÁÉÍÓÚÜÑáéíóúüñ]*$/, {
                message: "El nombre debe estar bien escrito",
            })
            .trim()
        ).nonempty()
        
});
const categoryValidator = (body) => {
    return categorySchema.safeParse(body);
}
const categoryPartialValidator = (body) => {
    return categorySchema.partial().safeParse(body);
}
module.exports = { categoryValidator, categoryPartialValidator};