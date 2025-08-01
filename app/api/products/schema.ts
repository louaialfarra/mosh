import z from "zod";

const schema = z.object({
  name: z.string().min(3).max(10),
  price: z.number().min(3).max(100),
});

export default schema;
