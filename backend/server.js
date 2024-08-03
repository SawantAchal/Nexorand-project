import express from 'express'
import { connectDB } from './config/db.js';
import 'dotenv/config'
import userRouter from './routes/userRoutes.js';
import taskRouter from './routes/taskRoutes.js';

const app = express();
const port =process.env.PORT || 4000;

app.use(express.json());

//db Connect
connectDB();

app.use('/api/user' , userRouter);
app.use('/api/tasks' , taskRouter);

app.get('/' ,(req , res) => {
    res.send("API working")
})

app.listen(port, () => {
    console.log(`server started on http://localhost:${port}`)
})