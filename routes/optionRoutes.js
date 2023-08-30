const express = require('express');
const router = express.Router();
const optionController = require('../controllers/optionController');
const Option = require('../models/Option'); 

// Add a vote to an option
router.post('/:id/add_vote', optionController.addVote);

// Delete an option
router.delete('/:id/delete', optionController.deleteOption);

module.exports = router;
