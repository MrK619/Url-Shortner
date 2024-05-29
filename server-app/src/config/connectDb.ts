import mongoose from "mongoose";

export const connectDb = async () => {
    try {
        const connect = await mongoose.connect(
            `${process.env.CONNECTION_STRING}`
        );

        console.log(
            "Connected to MongoDB",
            connect.connection.host,
            connect.connection.port
        );
    } catch (error) {
        console.error("Error connecting to MongoDB", error);
        process.exit(1);
    }
};

export default connectDb;
