import taskModel from '../model/taskModel.js'

//Add task 
const addTask = async(req , res) => {
    const {title , description } = req.body;
    try {
        const newTask = new taskModel({
            userId:req.user.id,
            title,
            description,
            completed: false
        })
        const task = await newTask.save();
        res.status(201).json({success: true, data: task})
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server Error' });    }
}

// Get all tasks for the logged-in user
const getTasks = async (req, res) => {
    try {
        const tasks = await taskModel.find({ userId: req.user.id });
        res.json({ success: true, data: tasks });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

// Remove task
const removeTask = async(req , res) => {
    const {id} = req.params;
    try {
        const task = await taskModel.findByIdAndDelete(id);
        if (!task) {
            return res.status(404).json({ success: false, message: 'Task not found' });
        }
        res.json({ success: true, message: 'Task removed' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
}

// update task
const updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    try {
        const task = await taskModel.findByIdAndUpdate(id, { title, description, completed }, { new: true });
        if (!task) {
            return res.status(404).json({ success: false, message: 'Task not found' });
        }
        res.json({ success: true, data: task });
    } catch (error) {
        console.error('Error updating task:', error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
}


// Get tasks by day
const getTaskByDay = async(req , res) => {
    const {day} = req.params;
    try {
        const startOfDay = new Date(day);
        const endOfDay = new Date(startOfDay);
        endOfDay.setDate(startOfDay.getDate() + 1);

        const tasks = await taskModel.find({
            userId: req.user.id,
            createdAt:{$gte:startOfDay , $lt :endOfDay},
        })
        res.json({ success: true, data: tasks });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
}

export {addTask ,getTasks, removeTask , updateTask,getTaskByDay}