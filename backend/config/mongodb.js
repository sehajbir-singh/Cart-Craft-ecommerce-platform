import mongoose from "mongoose";
// signup to mogodb atlas
const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("DB Connected");
    });

    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "e-commerce",
    });
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
  }
};

export default connectDB;



