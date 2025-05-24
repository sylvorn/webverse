import { z } from "zod";
export const notificationSchema = z.object({
  marketing: z.boolean(),
  security: z.boolean(),
  newsletter: z.boolean(),
});
