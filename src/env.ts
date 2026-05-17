import { z } from "zod";

const envSchema = z.object({
    NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
    MONGODB_URI: z.string().url().optional(),
    EMAIL_FROM: z.string().email().optional(),
    GMAIL_USER: z.string().email().optional(),
    GMAIL_APP_PASSWORD: z.string().min(8).optional(),
});

export const env = envSchema.parse(process.env);
