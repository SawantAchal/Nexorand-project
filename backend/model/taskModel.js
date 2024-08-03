import mongoose from "mongoose";

// Define the schema for the Task model
const taskSchema = new mongoose.Schema({
    // Reference to the user who created the task
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    
    // Title of the task
    title: { type: String, required: true },
    
    // Description of the task
    description: { type: String },
    
    // Date when the task was created
    date: { type: Date, default: Date.now },
    
    // Status of the task (completed or not)
    completed: { type: Boolean, default: false },
    
    // Date when the task was last updated
    updatedAt: { type: Date, default: Date.now },
}, { timestamps: true }); // Add createdAt and updatedAt timestamps automatically

// Create or get the Task model
const taskModel = mongoose.models.task || mongoose.model("task", taskSchema);

export default taskModel;
