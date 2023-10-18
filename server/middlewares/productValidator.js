const z = require("zod");

const required_camp = "Campo Requerido";

const productSchema = z.object({
  id: z
    .number({
      invalid_type_error: "Id no valido",
      required_error: required_camp,
    })
    .optional()
    .readonly(),
  name: z.string({
    invalid_type_error: "El nombre debe ser letras",
    required_error: required_camp,
  }),
  subtitle: z.string({
    invalid_type_error: "El subtitle debe ser letras",
    required_error: required_camp,
  }),
  description: z.string({
    invalid_type_error: "Description debe ser letras",
    required_error: required_camp,
  }),
  detail: z.string({
    invalid_type_error: "Detalles deben ser una cadena de texto",
    required_error: required_camp,
  }),
  brand_name: z.string({
    invalid_type_error: "Brand debe ser una cadena de texto",
    required_error: required_camp,
  }),
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
  energy_efficiency: z
    .string({
      invalid_type_error: "Energy Efficiency debe ser una cadena de texto",
      required_error: required_camp,
    })
    .trim(),
  price: z
    .number({
      invalid_type_error: "Tiene que ser un numero",
      required_error: required_camp,
    })
    .positive(),
  available_quantity: z
    .number({
      invalid_type_error: "La cantidad disponible debe ser un numero",
      required_error: required_camp,
    })
    .int()
    .positive(),
  image: z.object({
    cover: z
      .string({
        invalid_type_error: "La url debe tener formato especifico",
        required_error: required_camp,
      })
      .url(),
    picture_1: z
      .string({
        invalid_type_error: "La url debe tener formato especifico",
        required_error: required_camp,
      })
      .url(),
    picture_2: z
      .string({
        invalid_type_error: "La url debe tener formato especifico",
        required_error: required_camp,
      })
      .url(),
  }),
  category: z
    .string({
      invalid_type_error: "La categoria debe ser un cadena de texto",
      required_error: required_camp,
    })
    .trim(),
});

const validatorProduct = (body) => {
  return productSchema.safeParse(body);
};

const validatorPartialProduct = (body) => {
  return productSchema.partial().safeParse(body);
};

module.exports = { validatorProduct, validatorPartialProduct };
