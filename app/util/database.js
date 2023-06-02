import { MongoClient } from "mongodb";
const url = process.env.NEXT_PUBLIC_MONGO_URL;
const options = { useNewUrlParser: true };
let connectDB;

async function connectToMongo() {
  if (process.env.NODE_ENV === "development") {
    if (!global._mongo) {
      global._mongo = await MongoClient.connect(url, options);
    }
    connectDB = global._mongo;
  } else {
    connectDB = await MongoClient.connect(url, options);
  }
}

connectToMongo().catch(console.error);

export { connectDB };
