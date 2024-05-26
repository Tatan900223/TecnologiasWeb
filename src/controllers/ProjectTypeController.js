const ProjectType = require('../models/ProjectType');

exports.getAllProjectTypes = async (req, res) => {
    try {
        const projectTypes = await ProjectType.find();
        res.json(projectTypes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createProjectType = async (req, res) => {
    const { name } = req.body;
    try {
        const newProjectType = new ProjectType({ name });
        await newProjectType.save();
        res.status(201).json(newProjectType);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateProjectType = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
        const projectType = await ProjectType.findById(id);
        if (!projectType) return res.status(404).json({ error: 'ProjectType not found' });

        projectType.name = name;
        projectType.updatedAt = Date.now();
        await projectType.save();
        res.json(projectType);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
