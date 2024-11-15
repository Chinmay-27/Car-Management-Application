const Car = require('../models/Car');

// Create Car
exports.createCar = async (req, res) => {
  const { title, description, tags, images } = req.body;
  const userId = req.userId;

  // Validate required fields
  if (!title || !description || !tags || !images) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const newCar = await Car.create({ user: userId, title, description, tags, images });
    res.status(201).json({ message: 'Car created successfully', car: newCar });
  } catch (error) {
    res.status(400).json({ error: 'Invalid data' });
  }
};

// Get All Cars for Logged-in User
exports.getUserCars = async (req, res) => {
  const userId = req.userId;

  try {
    const cars = await Car.find({ user: userId });
    res.json(cars);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Search Cars
exports.searchCars = async (req, res) => {
  const { keyword } = req.query;

  try {
    const cars = await Car.find({
      $or: [
        { title: { $regex: keyword, $options: 'i' } },
        { description: { $regex: keyword, $options: 'i' } },
        { tags: { $regex: keyword, $options: 'i' } },
      ],
    });
    res.json(cars);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Get Car by ID
exports.getCarById = async (req, res) => {
  const { id } = req.params;

  try {
    const car = await Car.findById(id);
    if (!car) return res.status(404).json({ error: 'Car not found' });

    res.json(car);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Update Car
exports.updateCar = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const car = await Car.findByIdAndUpdate(id, updates, { new: true });
    if (!car) return res.status(404).json({ error: 'Car not found' });

    res.json({ message: 'Car updated successfully', car });
  } catch (error) {
    res.status(400).json({ error: 'Invalid data' });
  }
};

// Delete Car
exports.deleteCar = async (req, res) => {
  const { id } = req.params;

  try {
    const car = await Car.findByIdAndDelete(id);
    if (!car) return res.status(404).json({ error: 'Car not found' });

    res.json({ message: 'Car deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};