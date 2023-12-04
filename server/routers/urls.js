const express = require('express');

const WeatherController = require('../controllers/WeatherController');

const router = express.Router();

router.get('/api/weather/:lat/:long', WeatherController.fetchForecast);

module.exports = router;
