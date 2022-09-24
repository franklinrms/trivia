import { z } from 'zod';

export const PlayerSchema = z.object({
  name: z.string(),
  picture: z.string(),
  score: z.number().int(),
});

export type IPlayer = z.infer<typeof PlayerSchema>;