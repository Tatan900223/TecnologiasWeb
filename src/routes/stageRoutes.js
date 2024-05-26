const express = require('express');
const router = express.Router();
const StageController = require('../controllers/StageController');

router.get('/', StageController.getAllStages);
router.post('/', StageController.createStage);
router.put('/:id', StageController.updateStage);

module.exports = router;
