import mongoose from "mongoose";
// signup to mogodb atlas

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const connectDB = async () => {
  

  try {
    if (cached.conn) return cached.conn;

    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is missing");
    }


    if (!cached.promise) {
      cached.promise = mongoose.connect(process.env.MONGODB_URI, {
        dbName: "e-commerce",
      });
    }

    cached.conn = await cached.promise;

   
    console.log("DB Connected");

    return cached.conn;
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    throw error;
  }
};

export default connectDB;
