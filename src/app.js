const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Backend API is running!",
    endpoints: {
      register: "POST /auth/register",
      login: "POST /auth/login",
      tasks: "POST /tasks, GET /tasks, PUT /tasks/:id, DELETE /tasks/:id"
    }
  });
});

app.use("/auth", authRoutes);
app.use(taskRoutes);

module.exports = app;
