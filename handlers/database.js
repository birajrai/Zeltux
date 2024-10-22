const mongoose = require("mongoose");
const { MongoDBURI } = require("./../config.json");
async function connectToDatabase() {
  try {
    await mongoose.connect(MongoDBURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
}

module.exports = { connectToDatabase };
