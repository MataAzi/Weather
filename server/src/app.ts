import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
import cors from 'cors'
import { api_modules } from './config';
import { WeatherAPI } from './api/weatherapi';
import { getPolutionText } from './utils';

const app = express();

app.use(cors())

app.get('/search', async (req, res) => {
    const query = <string>req.query.q;
    if (!query) return res.sendStatus(400);
    const defaultModule = api_modules.find(x => x.default);
    const citites = await defaultModule!.module.searchCities(query);
    res.send(citites)
})

app.get('/city/:name', async (req, res) => {
    const name = req.params.name;
    if (!name) return;
    const defaultModule = api_modules.find(x => x.default);
    const city = await defaultModule!.module.getCity(name);
    return res.send({
        name: city.location.name,
        wind: city.current.wind_kph,
        status: city.current.condition.text,
        temp: city.current.temp_c,
        aqi: getPolutionText(city.current.air_quality["gb-defra-index"])
    })
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Listening On Port 3000');
})
