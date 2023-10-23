const z = require("zod");

const productSchema = z.object({
  productId: z.string().uuid().optional().readonly(),
  name: z.string(),
  subtitle: z.string(),
  description: z.string(),
  detail: z.string(),
  technical_info: z
    .object({
      driver_model: z.string(),
      energy_use: z.string(),
    })
    .optional(),
  measures: z
    .object({
      height: z.number().positive(),
      width: z.number().positive(),
      base_diameter: z.number().positive(),
    })
    .optional(),
  energy_efficiency: z.string().trim(),
  price: z.number().positive(),
  available_quantity: z.number().int().positive(),
  images: z.object({
    cover: z.string().url(),
    picture_1: z.string().url(),
    picture_2: z.string().url(),
  }),
  productEnabled: z.boolean(),
  garanty: z.number().int().positive().optional(),
  category: z
    .object({
      id: z.string().uuid(),
      name: z.string().regex(/^[A-Z][a-zA-Z]*$/, {
        message: "Tu nombre no cumple los requisitos",
      }),
      brand_name: z.string().regex(/^[A-Z][a-zA-Z]*$/, {
        message: "Tu nombre no cumple los requisitos",
      }),
    })
    .required(),
});

const validatorProduct = (body) => {
  return productSchema.safeParse(body);
};

const validatorPartialProduct = (body) => {
  return productSchema.partial().safeParse(body);
};

module.exports = { validatorProduct, validatorPartialProduct };
