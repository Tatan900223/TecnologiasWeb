const Stage = require('../models/Stage');

exports.getAllStages = async (req, res) => {
    try {
        const stages = await Stage.find();
        res.json(stages);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createStage = async (req, res) => {
    const { name } = req.body;
    try {
        const newStage = new Stage({ name });
        await newStage.save();
        res.status(201).json(newStage);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateStage = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
        const stage = await Stage.findById(id);
        if (!stage) return res.status(404).json({ error: 'Stage not found' });

        stage.name = name;
        stage.updatedAt = Date.now();
        await stage.save();
        res.json(stage);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
