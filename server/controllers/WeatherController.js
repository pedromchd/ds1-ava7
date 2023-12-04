const Weather = require('../models/Weather');

async function fetchForecast({ lat, long }) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,wind_speed_10m&hourly=temperature_2m,precipitation_probability,weather_code,uv_index,is_day&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=America%2FSao_Paulo&past_days=1`;
    const response = await fetch(url);
    const forecast = await response.json();

    return forecast;
}

exports.fetchForecast = async (req, res) => {
    const forecast = await fetchForecast(req.params);

    const { 
        time: data, 
        temperature_2m: temperatura, 
        apparent_temperature: sensacao, 
        relative_humidity_2m: umidade, 
        weather_code: codigo,
    } = forecast.current;

    Weather.create({ cidade: 'Cidade', data, temperatura, sensacao, umidade, codigo });

    res.json(forecast);
};
