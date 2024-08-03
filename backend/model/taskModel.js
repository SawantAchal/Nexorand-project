import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    userId : {type:mongoose.Schema.Types.ObjectId, ref:'user' , required:true},
    title: { type: String, required: true },
    description: { type: String },
    date: { type: Date, default: Date.now },
    completed: { type: Boolean, default: false },    
    updatedAt: { type: Date, default: Date.now },
},{ timestamps: true })

const taskModel = mongoose.models.task || mongoose.model("task" , taskSchema);
export default taskModel;