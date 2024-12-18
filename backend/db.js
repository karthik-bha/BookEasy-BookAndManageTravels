const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config(); 

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database connected successfully!")
  } catch (err) {
    console.error("Database connection failed:", err.message); 
  }
};

module.exports = connectDB;
