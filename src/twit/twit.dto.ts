import { z } from 'zod';

export const ICreateTwit = z.object({
  text: z.string().min(1, 'Text is required').max(280),
})
