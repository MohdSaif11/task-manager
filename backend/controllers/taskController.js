const Task = require("../models/Task");

// CREATE
exports.createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
exports.updateTask = async (req, res) => {
  try {
    const { title, status } = req.body;

    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { title, status },
      { new: true }
    );

    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE
exports.deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
