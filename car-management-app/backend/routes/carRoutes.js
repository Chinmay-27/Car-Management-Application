const express = require('express');
const router = express.Router();
const carController = require('../controllers/carController');
const authMiddleware = require('../middlewares/authMiddleware');

// Protect routes with authentication middleware
router.post('/cars', authMiddleware, carController.createCar);   // Create Car
router.get('/cars', authMiddleware, carController.getUserCars);  // Get all user's cars
router.get('/cars/search', authMiddleware, carController.searchCars); // Search Cars
router.get('/cars/:id', authMiddleware, carController.getCarById); // Get car by ID
router.put('/cars/:id', authMiddleware, carController.updateCar);  // Update car
router.delete('/cars/:id', authMiddleware, carController.deleteCar); // Delete car

module.exports = router;
