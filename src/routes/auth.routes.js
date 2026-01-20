const express = require('express');
const authController = require('../controllers/auth.controller');
const authMiddleware = require('../middleware/auth.middleware');

const router = express.Router();

// Public routes
router.post('/send-otp', authController.sendOTP);
router.post('/verify-otp', authController.verifyOTP);

// Protected routes
router.get('/profile', authMiddleware.authenticate, authController.getProfile);
router.post('/logout', authMiddleware.authenticate, authController.logout);

module.exports = router;
