import taskModel from '../model/taskModel.js'

// Add a new task
const addTask = async (req, res) => {
    // Extract title and description from the request body
    const { title, description } = req.body;
    try {
        // Create a new task document with the provided details and a default completed status of false
        const newTask = new taskModel({
            userId: req.user.id,
            title,
            description,
            completed: false
        });

        // Save the new task to the database
        const task = await newTask.save();
        // Respond with a success status and the created task data
        res.status(201).json({ success: true, data: task });
    } catch (error) {
        // Log any errors and respond with a server error status
        console.error(error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
}

// Get all tasks for the logged-in user
const getTasks = async (req, res) => {
    try {
        // Find all tasks associated with the logged-in user's ID
        const tasks = await taskModel.find({ userId: req.user.id });
        // Respond with success status and the retrieved tasks
        res.json({ success: true, data: tasks });
    } catch (error) {
        // Log any errors and respond with a server error status
        console.error(error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

// Remove a task by ID
const removeTask = async (req, res) => {
    // Extract task ID from the request parameters
    const { id } = req.params;
    try {
        // Find and delete the task by ID
        const task = await taskModel.findByIdAndDelete(id);
        // If no task is found, respond with a 404 error
        if (!task) {
            return res.status(404).json({ success: false, message: 'Task not found' });
        }
        // Respond with success status and a message indicating the task was removed
        res.json({ success: true, message: 'Task removed' });
    } catch (error) {
        // Log any errors and respond with a server error status
        console.error(error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
}

// Update a task by ID
const updateTask = async (req, res) => {
    // Extract task ID from the request parameters
    const { id } = req.params;
    // Extract the new title, description, and completed status from the request body
    const { title, description, completed } = req.body;
    try {
        // Find the task by ID and update it with the new details
        const task = await taskModel.findByIdAndUpdate(id, { title, description, completed }, { new: true });
        // If no task is found, respond with a 404 error
        if (!task) {
            return res.status(404).json({ success: false, message: 'Task not found' });
        }
        // Respond with success status and the updated task data
        res.json({ success: true, data: task });
    } catch (error) {
        // Log any errors and respond with a server error status
        console.error('Error updating task:', error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
}

// Get tasks by day
const getTaskByDay = async (req, res) => {
    // Extract the day parameter from the request
    const { day } = req.params;
    try {
        // Define the start and end of the day for filtering tasks
        const startOfDay = new Date(day);
        const endOfDay = new Date(startOfDay);
        endOfDay.setDate(startOfDay.getDate() + 1);

        // Find tasks created on the specified day for the logged-in user
        const tasks = await taskModel.find({
            userId: req.user.id,
            createdAt: { $gte: startOfDay, $lt: endOfDay },
        });
        // Respond with success status and the filtered tasks
        res.json({ success: true, data: tasks });
    } catch (error) {
        // Log any errors and respond with a server error status
        console.error(error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
}

export { addTask, getTasks, removeTask, updateTask, getTaskByDay }
