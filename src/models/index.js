import { connection, connect } from 'mongoose';

export const dbConnect = async () => {
    connection.once("open", () => console.log("MongoDB Connected."));
    return await connect(process.env.MONGODB_URI);
};

export const dbCloseConnection = async () => {
    console.log("MongoDB Disconnected.");
    return await connection.close();
};