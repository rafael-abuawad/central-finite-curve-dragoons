import { z } from "zod";

export const SafeMintSchema = z.object({
  owner: z.string().min(1),
});
