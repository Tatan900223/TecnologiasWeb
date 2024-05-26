const University = require('../models/University');

exports.getAllUniversities = async (req, res) => {
    try {
        const universities = await University.find();
        res.json(universities);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createUniversity = async (req, res) => {
    const { name, address, phone } = req.body;
    try {
        const newUniversity = new University({ name, address, phone });
        await newUniversity.save();
        res.status(201).json(newUniversity);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateUniversity = async (req, res) => {
    const { id } = req.params;
    const { name, address, phone } = req.body;
    try {
        const university = await University.findById(id);
        if (!university) return res.status(404).json({ error: 'University not found' });

        university.name = name;
        university.address = address;
        university.phone = phone;
        university.updatedAt = Date.now();
        await university.save();
        res.json(university);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
