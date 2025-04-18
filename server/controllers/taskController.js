const Task = require("../models/Task");

// Create Task
exports.createTask = async (req, res) => {
   try {
      const task = new Task(req.body);
      await task.save();
      res.json(task);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};

// Get All Tasks
exports.getTasks = async (req, res) => {
   try {
      const tasks = await Task.find();
      res.json(tasks);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};

// Update Task
exports.updateTask = async (req, res) => {
   try {
      const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(task);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};

// Delete Task
exports.deleteTask = async (req, res) => {
   try {
      await Task.findByIdAndDelete(req.params.id);
      res.json({ message: "Task deleted" });
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};

// Filter Tasks by Status
exports.filterTasks = async (req, res) => {
   try {
      const tasks = await Task.find({ status: req.params.status });
      res.json(tasks);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};
