import { MongoClient } from 'mongodb';

const uri = "mongodb://harshda183_db_user:Harshda007@ac-cfgm7gy-shard-00-00.wplpswn.mongodb.net:27017,ac-cfgm7gy-shard-00-01.wplpswn.mongodb.net:27017,ac-cfgm7gy-shard-00-02.wplpswn.mongodb.net:27017/?ssl=true&replicaSet=atlas-10kt4m-shard-0&authSource=admin&appName=Cluster0&compressors=zlib";

const client = new MongoClient(uri);

export async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("You successfully connected to MongoDB!");
    return client;
  } catch (err) {
    console.error("Connection error:", err);
  }
}

connectToMongoDB();