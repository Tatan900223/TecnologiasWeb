const express = require('express');
const router = express.Router();
const ProjectController = require('../controllers/ProjectController');

router.get('/', ProjectController.getAllProjects);
router.post('/', ProjectController.createProject);
router.put('/:id', ProjectController.updateProject);

module.exports = router;
