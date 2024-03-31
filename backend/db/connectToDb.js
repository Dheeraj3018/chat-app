import mongoose from "mongoose";

const conntectToDb = async () => {
  try {
    await mongoose.connect(process.env.URL);
    console.log("mongo is connected");
  } catch (error) {
    console.log("error connecting db", error.message);
  }
}

export default conntectToDb