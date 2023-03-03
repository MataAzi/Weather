import { BaseWeatherApi } from "../api/base";
import { WeatherApi } from "../api/weatherapi";

export const api_modules: Array<IModules> = [];

if (process.env.WEATHER_API_KEY) {
    const module = new WeatherApi(process.env.WEATHER_API_KEY)
    api_modules.push({ module, default: true });
}

interface IModules {
    default: boolean,
    module: BaseWeatherApi
} 