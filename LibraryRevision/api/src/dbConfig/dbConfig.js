import mongoose from "mongoose";

export const dbConfig = () => {
  try {
    const PORT = process.env.MongoUrl;
    mongoose.set("strictQuery", true);
    const connect = mongoose.connect(PORT);

    connect
      ? console.log("Mongo Db is connect")
      : console.log("cannot connect to the database");
  } catch (error) {
    console.log(error.message + "from the database connection function");
  }
};
