const z = require("zod");

const orderSchema = z.object({
  orderId: z.string().uuid().optional().readonly(),
  uid: z.string().min(36).max(36),
  products: z
    .array(
      z.object({
        productId: z.string().min(36).max(36),
        name: z.string().optional(),
        quantity: z.number().int().positive(),
        price: z.number().int().positive(),
        subtotal: z.number().int().positive(),
      })
    )
    .nonempty(),
  total_products: z.number().positive().int(),
  total: z.number().positive().int(),
  status: z.string().optional(),
});

const orderValidator = (body) => {
  return orderSchema.safeParse(body);
};

const orderPartialValidator = (body) => {
  return orderSchema.partial().safeParse(body);
};

module.exports = { orderValidator, orderPartialValidator };
