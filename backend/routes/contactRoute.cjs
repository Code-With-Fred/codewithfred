const express = require('express');
const router = express.Router();
const { sendContactForm } = require('../controllers/contactController.cjs');

router.post('/', sendContactForm); // POST /api/contact

module.exports = router;
