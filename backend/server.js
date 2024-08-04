import express from 'express';
import { connectDB } from './config/db.js';
import 'dotenv/config';
import userRouter from './routes/userRoutes.js';
import taskRouter from './routes/taskRoutes.js';
import { setupSwagger } from './config/swagger.js';

const app = express();
const port = process.env.PORT || 4000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Connect to the database
connectDB();

//setup swagger
setupSwagger(app)

// Routes
app.use('/api/user', userRouter);  // Routes for user-related operations
app.use('/api/tasks', taskRouter); // Routes for task-related operations

// Test route to check if the API is working
app.get('/', (req, res) => {
    res.send("API working");
});

// Start the server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
