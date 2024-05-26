const express = require('express');
const router = express.Router();
const ClientController = require('../controllers/ClientController');

router.get('/', ClientController.getAllClients);
router.post('/', ClientController.createClient);
router.put('/:id', ClientController.updateClient);

module.exports = router;
