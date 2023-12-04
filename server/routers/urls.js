const express = require('express');

const WeatherController = require('../controllers/WeatherController');

const router = express.Router();

router.get('/api/weather/:lat/:long', WeatherController.fetchForecast);

router.get('/api', (req, res) => {
    res.json({ message: 'Hello from server!' });
});

module.exports = router;
