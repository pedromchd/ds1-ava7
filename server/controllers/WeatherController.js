const Weather = require('../models/Weather');

async function fetchForecast({ lat, long }) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,relativehumidity_2m,apparent_temperature,is_day,precipitation,weathercode,windspeed_10m&hourly=temperature_2m,precipitation_probability,weathercode,uv_index&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=America%2FSao_Paulo`;
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
        relativehumidity_2m: umidade, 
        weathercode: codigo,
    } = forecast.current;

    Weather.create({ cidade: 'Cidade', data, temperatura, sensacao, umidade, codigo });

    res.json(forecast);
};
