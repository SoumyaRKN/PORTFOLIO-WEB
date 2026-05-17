import mongoose from "mongoose";
import { env } from "@/env";

declare global {
    // eslint-disable-next-line no-var
    var mongooseConnection: { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null } | undefined;
}

const cached = global.mongooseConnection ?? { conn: null, promise: null };

global.mongooseConnection = cached;

export async function dbConnect(): Promise<typeof mongoose> {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        if (!env.MONGODB_URI) {
            throw new Error("MONGODB_URI is missing. Configure it in your environment file.");
        }

        cached.promise = mongoose.connect(env.MONGODB_URI, {
            dbName: "portfolio",
            bufferCommands: false,
        });
    }

    cached.conn = await cached.promise;
    return cached.conn;
}
