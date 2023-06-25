import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb://user:${password}@ac-ykzpqpb-shard-00-00.fcolirf.mongodb.net:27017,ac-ykzpqpb-shard-00-01.fcolirf.mongodb.net:27017,ac-ykzpqpb-shard-00-02.fcolirf.mongodb.net:27017/?ssl=true&replicaSet=atlas-k5689r-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting to the database ", error);
  }
};

export default Connection;
