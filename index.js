const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Sample tasks array (our "database")
let tasks = [
  { id: 1, title: "Complete homework", description: "Finish the To-Do List API", completed: false },
  { id: 2, title: "Study for exam", description: "Review Express.js concepts", completed: false },
  { id: 3, title: "Go shopping", description: "Buy groceries", completed: true }
];

// 1️⃣ GET - View all tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// 2️⃣ POST - Add a new task
app.post('/tasks', (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    title: req.body.title,
    description: req.body.description,
    completed: req.body.completed || false
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// 3️⃣ PUT - Update an entire task
app.put('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const taskIndex = tasks.findIndex(t => t.id === id);
  
  if (taskIndex === -1) {
    return res.status(404).json({ message: "Task not found" });
  }
  
  tasks[taskIndex] = {
    id: id,
    title: req.body.title,
    description: req.body.description,
    completed: req.body.completed
  };
  
  res.json(tasks[taskIndex]);
});

// 4️⃣ PATCH - Update part of a task (e.g., mark as completed)
app.patch('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find(t => t.id === id);
  
  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }
  
  if (req.body.title !== undefined) task.title = req.body.title;
  if (req.body.description !== undefined) task.description = req.body.description;
  if (req.body.completed !== undefined) task.completed = req.body.completed;
  
  res.json(task);
});

// 5️⃣ DELETE - Remove a task
app.delete('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const taskIndex = tasks.findIndex(t => t.id === id);
  
  if (taskIndex === -1) {
    return res.status(404).json({ message: "Task not found" });
  }
  
  const deletedTask = tasks.splice(taskIndex, 1);
  res.json({ message: "Task deleted", task: deletedTask[0] });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get("/tasks",(req,res)=>{
  res.json(tasks)
})

app.post("/tasks",(req,res)=>{
  const newTask = req.body;
  tasks.push(newTask);
  res.status(201).send("Tasks added");
})

app.get("/tasks/:id",(req,res)=>{
  const id = req.params.id;
  console.log(id);
  res.json(tasks)
})

app.put("/tasks/:id",(req,res)=>{
  const id = parseInt(req.params.id);
  const task = tasks.find(td => td.id = = id);
  task.title = updated.title
  task.completed = updated.completed
})





























