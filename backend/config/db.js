import mongoose from 'mongoose'

// Connect to MongoDB
export const connectDB = async () => {
    // Get the MongoDB connection URL from environment variables
    const mongoURL = process.env.MONGODB_URL;

    // Check if the MongoDB URL is provided
    if (!mongoURL) {
        console.error('MongoDB URL not found in environment variables');
        return; // Exit the function if the URL is not provided
    }

    try {
        // Attempt to connect to MongoDB
        await mongoose.connect(mongoURL);
        console.log('DB connected'); // Log success message if connection is successful
    } catch (error) {
        // Log an error message if connection fails
        console.error('Error connecting to MongoDB:', error);
    }
}
