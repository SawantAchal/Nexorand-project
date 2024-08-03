import mongoose from "mongoose";

// Define the schema for the User model
const userSchema = new mongoose.Schema({
    // Name of the user
    name: { type: String, required: true },
    
    // Email of the user, must be unique
    email: { type: String, required: true, unique: true },
    
    // Password of the user
    password: { type: String, required: true },
}, { minimize: false }); // Avoid removing empty objects when saving

// Create or get the User model
const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;
