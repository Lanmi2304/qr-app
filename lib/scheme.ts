import { z } from "zod";

export const input = z.object({
  inputValue: z.string().trim().min(1, "Input field is required!"),
});

export type inputType = z.infer<typeof input>;
