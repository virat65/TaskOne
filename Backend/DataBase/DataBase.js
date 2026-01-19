import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.mongoUrl);
    console.log(`DataBase Connected successfully`);
  } catch (error) {
    console.log("Error in DataBase", error);
  }
};
export default dbConnect;
