import mongoose from 'mongoose';
const NX_MONGO_URL = process.env.NX_MONGO_URL;

export const mongooseConnectDB = () => {
    mongoose.set("strictQuery", false);
    mongoose
        .connect(NX_MONGO_URL)
        .then(() =>
            console.log(`🚀 Mongoose connected to ${NX_MONGO_URL}`)
        )
        .catch((err) => console.log("error connecting to the database", err));
}