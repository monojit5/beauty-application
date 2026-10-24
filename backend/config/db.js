import mongoose from 'mongoose';
import dotenv from 'dotenv';
import {seedProducts} from './seedproduct.js'
dotenv.config();
const MONGO_URI = process.env.MONGO_URI 
const connectDB = async () => {
  try {
     await mongoose.connect(MONGO_URI);
     await seedProducts()
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(`Database connection error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
