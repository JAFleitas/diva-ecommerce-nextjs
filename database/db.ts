import mongoose from "mongoose";

/* 
    disconnected = 0 
    connected = 1
    connecting = 2 
    disconnecting = 3
*/

const MONGO_URL = process.env.MONGO_URL || "";
const mongoConnection = {
  isConnected: 0,
};

export const connect = async () => {
  if (mongoConnection.isConnected) {
    console.log("we are connected");
    return;
  }
  if (mongoose.connections.length > 0) {
    mongoConnection.isConnected = mongoose.connections[0].readyState;
    if (mongoConnection.isConnected === 1) {
      console.log("we are connected");
      return;
    }

    await mongoose.disconnect();
  }

  await mongoose.connect(MONGO_URL);
  mongoConnection.isConnected = 1;
  console.log("Connected to MongoDB", MONGO_URL);
};

export const disconnect = async () => {
  if (mongoConnection.isConnected === 0) return;
  await mongoose.disconnect();
  mongoConnection.isConnected = 0;
  console.log("Disconnected");
};