const express = require('express');
const { startTest, submitTest } = require('../controllers/testController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/start', authMiddleware, startTest);
router.post('/submit', authMiddleware, submitTest);

module.exports = router;
