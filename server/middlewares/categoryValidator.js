const z = require("zod");

const categorySchema = z.object({
    id: z.number().optional().readonly(),
    name: z
        .string({
        invalid_type_error: "El nombre debe ser letras",
        required_error: "El nombre es requerido.",
        })
        .regex(/^[A-Z][a-zA-Z]*$/, {
        message: "Tu nombre debe estar bien escrito",
        })
        .trim()
});
const categoryValidator = (body) => {
    return categorySchema.safeParse(body);
}
module.exports = { categoryValidator };