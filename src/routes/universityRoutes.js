const express = require('express');
const router = express.Router();
const UniversityController = require('../controllers/UniversityController');

router.get('/', UniversityController.getAllUniversities);
router.post('/', UniversityController.createUniversity);
router.put('/:id', UniversityController.updateUniversity);

module.exports = router;
