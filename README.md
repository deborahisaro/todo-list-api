# To-Do List API

## Project Description
This is a simple To-Do List API built with Express.js that allows users to manage tasks through RESTful endpoints. Users can view, add, update, and delete tasks.

## Features
- **GET** `/tasks` - Retrieve all tasks
- **POST** `/tasks` - Add a new task
- **PUT** `/tasks/:id` - Update an entire task
- **PATCH** `/tasks/:id` - Update part of a task (e.g., mark as completed)
- **DELETE** `/tasks/:id` - Delete a task

## Technologies Used
- Node.js
- Express.js

## How to Run the Server

### Prerequisites
- Node.js installed on your machine
- Postman (for testing)

### Installation Steps

1. Clone this repository:
```bash
   git clone <https://github.com/deborahisaro/todo-list-api.git>
```

2. Navigate to the project folder:
```bash
   cd todo-list-api
```

3. Install dependencies:
```bash
   npm install
```

4. Start the server:
```bash
   node server.js
```

5. The server will run on `http://localhost:3000`

## API Testing with Postman

### 1. GET - View All Tasks
![GET Request](screenshots/GET-request.png)

### 2. POST - Add New Task
![POST Request](screenshots/POST-request.png)

### 3. PUT - Update Entire Task
![PUT Request](screenshots/PUT-request.png)

### 4. PATCH - Update Part of Task
![PATCH Request](screenshots/PATCH-request.png)

### 5. DELETE - Remove Task
![DELETE Request](screenshots/DELETE-request.png)

## Project Structure
```
todo-list-api/
├── node_modules/
├── screenshots/
├── server.js
├── package.json
├── package-lock.json
└── README.md
```



## Author
[Isaro Deborah]