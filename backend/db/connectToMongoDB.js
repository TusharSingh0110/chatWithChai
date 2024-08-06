import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const connectToMongoDB = async () => {
  try {
    // Try to get the MongoDB URI from environment variables its hardcoded because its showing error
    const uri = process.env.MONGO_DB_URI 

    // console.log('MongoDB URI:', uri); 

    if (!uri) {
      throw new Error('MongoDB URI is not defined');
    }

    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');
  } catch (error) {
    console.log('Error connecting to MongoDB:', error.message);
  }
};

export default connectToMongoDB;
