const mongoose = require("mongoose");

async function connectToDB() {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);

       console.log("mongo db connected");
  } catch (err) {
    console.log("database not connected", err);
  }
}

 module.exports = connectToDB;