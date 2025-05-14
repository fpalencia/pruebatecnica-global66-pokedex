import { z } from "zod";

export const PokemonSchema = z.object({
  id: z.number(),
  name: z.string(),
  weight: z.number(),
  height: z.number(),
  frontSprite: z.string(),
  types: z.array(z.string())
});
