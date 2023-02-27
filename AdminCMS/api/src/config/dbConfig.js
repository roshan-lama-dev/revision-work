import mongoose from "mongoose";

export const dbConfig = () => {
  try {
    const PORT = process.env.Mongo_Url;
    mongoose.set("strictQuery", false);
    const connect = mongoose.connect(PORT);
    if (connect) {
      console.log("Mongo Db is connected");
    }
  } catch (error) {
    console.log(error.message);
  }
};
