import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connection successful!");
  } catch (error) {
    console.error("Connection error ", error);
    process.exit(1); //exit with failure
  }
};
