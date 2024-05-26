const Project = require('../models/Project');

exports.getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find().populate('client').populate('projectType').populate('university').populate('stage');
        res.json(projects);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createProject = async (req, res) => {
    const { number, title, startDate, endDate, value, client, projectType, university, stage } = req.body;
    try {
        const newProject = new Project({ number, title, startDate, endDate, value, client, projectType, university, stage });
        await newProject.save();
        res.status(201).json(newProject);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateProject = async (req, res) => {
    const { id } = req.params;
    const { number, title, startDate, endDate, value, client, projectType, university, stage } = req.body;
    try {
        const project = await Project.findById(id);
        if (!project) return res.status(404).json({ error: 'Project not found' });

        project.number = number;
        project.title = title;
        project.startDate = startDate;
        project.endDate = endDate;
        project.value = value;
        project.client = client;
        project.projectType = projectType;
        project.university = university;
        project.stage = stage;
        project.updatedAt = Date.now();
        await project.save();
        res.json(project);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
