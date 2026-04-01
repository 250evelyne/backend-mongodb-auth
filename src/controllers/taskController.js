const Task = require("../models/Task");
const { resolveAssignedUserId } = require("../utils/taskUtils");

const createTask = async (req, res) => {
    try {
        if (!req.user || !req.user.id) {
            return res.status(401).json({ message: "Not authenticated" });
        }

        const { title, description, done, priority, assignedUserId } = 
req.body;

        if (!title) {
            return res.status(400).json({ message: "Title is required" });
        }

        const resolvedUserId = resolveAssignedUserId(assignedUserId);
        if (resolvedUserId instanceof Error) {
            return res.status(400).json({ message: resolvedUserId.message 
});
        }

        const task = await Task.create({
            title,
            description,
            done,
            priority,
            userId: req.user.id,
            assignedUserId: resolvedUserId
        });

        return res.status(201).json({
            message: "Task created successfully",
            task
        });
   } catch (error) {
    console.log("ERROR:", error);
    return res.status(500).json({ message: "Server error", error: error.message });
}

};

const getTasks = async (req, res) => {
    try {
        if (!req.user || !req.user.id) {
            return res.status(401).json({ message: "Not authenticated" });
        }

        const tasks = await Task.find({
            $or: [
                { userId: req.user.id },
                { assignedUserId: req.user.id }
            ]
        }).sort({ createdAt: -1 });

        return res.status(200).json({ tasks });
   } catch (error) {
    console.log("ERROR:", error);
    return res.status(500).json({ message: "Server error", error: error.message });
}

};

module.exports = { createTask, getTasks };

