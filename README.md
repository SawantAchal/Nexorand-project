## Overview

This is a simple Task Manager API built with Node.js, Express.js, and MongoDB. It allows users to manage tasks with features such as adding, updating, removing tasks, and viewing tasks by day.
Live Link : https://nexorand-project.onrender.com/api-docs/
## Features

- **User Authentication**: Signup and login functionality.
- **Task Management**: Add, update, remove, and view tasks.
- **Task History**: View tasks by day.

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- thunderClient or a similar API testing tool

### Installation

1. **Clone the Repository**

    \`\`\`bash
    git clone https://github.com/SawantAchal/Nexorand-project.git
    cd backend
    \`\`\`

2. **Install Dependencies**

    \`\`\`bash
    npm install
    \`\`\`

3. **Set Up Environment Variables**

    Create a \`.env\` file in the root directory and add the following environment variables:

    \`\`\`env
    PORT=4000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    \`\`\`

4. **Run the Application**

    \`\`\`
    npm run server
    \`\`\`

    The server will start on `http://localhost:4000/`.

## API Endpoints

### Authentication

- **Signup**

    \`\`\`http
    POST (http://localhost:4000/api/user/signup)
    \`\`\`

    **Request Body:**
    \`\`\`json
    {
      "name" :"user",
      "email": "user@example.com",
      "password": "yourpassword"
    }
    \`\`\`

- **Login**

    \`\`\`http
    POST (http://localhost:4000/api/user/login)
    \`\`\`

    **Request Body:**
    \`\`\`json
    {
      "email": "user@example.com",
      "password": "yourpassword"
    }
    \`\`\`
### Tasks

- **Add Task**

    \`\`\`http
    POST (http://localhost:4000/api/tasks)
    \`\`\`

    **Request Headers:**
    \`\`\`http
    Authorization: Bearer <jwt_token>
    \`\`\`

    **Request Body:**
    \`\`\`json
    {
      "title": "Task Title",
      "description": "Task Description"
    }
    \`\`\`
- **Update Task**

    \`\`\`http
    PUT http://localhost:4000/api/tasks/:id
    \`\`\`

    **Request Headers:**
    \`\`\`http
    Authorization: Bearer <jwt_token>
    \`\`\`

    **Request Body:**
    \`\`\`json
    {
      "title": "Updated Title",
      "description": "Updated Description",
      "completed": true
    }
    \`\`\`

- **Remove Task**

    \`\`\`http
    DELETE http://localhost:4000/api/tasks/:id
    \`\`\`

    **Request Headers:**
    \`\`\`http
    Authorization: Bearer <jwt_token>
    \`\`\`
  
- **Get Tasks**

    \`\`\`http
    GET (http://localhost:4000/api/tasks/get/:id)
    \`\`\`

    **Request Headers:**
    \`\`\`http
    Authorization: Bearer <jwt_token>
    \`\`\`

- **Get Tasks by Day**

    \`\`\`http
    GET http://localhost:4000/api/tasks/day/:day
    \`\`\`

    **Request Headers:**
    \`\`\`http
    Authorization: Bearer <jwt_token>
    \`\`\`

## Error Handling

- **404 Not Found**: When a requested resource is not found.
- **500 Server Error**: For unexpected server errors.
