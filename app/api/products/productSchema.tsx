import { z } from "zod";

const productSchema = z.object({
  id: z.number(),
  product: z.string().min(3),
  price: z.number(),
});

export default productSchema;
