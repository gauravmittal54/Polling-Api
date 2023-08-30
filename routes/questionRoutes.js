const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');
const Option = require('../models/Option'); // Import the Option model


// Create a question
router.post('/create', questionController.createQuestion);

// Add options to a question
router.post('/:id/options/create', questionController.addOptions);

// Delete a question
router.delete('/:id/delete', questionController.deleteQuestion);

// View a question and its options
router.get('/:id', questionController.viewQuestion);

module.exports = router;
