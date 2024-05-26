const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    number: { type: String, unique: true, required: true },
    title: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    value: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
    projectType: { type: mongoose.Schema.Types.ObjectId, ref: 'ProjectType', required: true },
    university: { type: mongoose.Schema.Types.ObjectId, ref: 'University', required: true },
    stage: { type: mongoose.Schema.Types.ObjectId, ref: 'Stage', required: true }
});

module.exports = mongoose.model('Project', projectSchema);
