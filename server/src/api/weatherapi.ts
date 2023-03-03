import axios, { AxiosInstance } from "axios";
import { BaseWeatherApi } from "./base";

export class WeatherApi extends BaseWeatherApi {
    /**
     * WeatherApi.Com V1
     */
    axiosInstance: AxiosInstance;
    token: string;
    constructor(token: string) {
        super()
        this.axiosInstance = axios.create({
            baseURL: 'http://api.weatherapi.com/v1/'
        })
        this.token = token;
    }

    searchCities = async (searchQuery: string) => {
        const searchResult = await this.axiosInstance.get(`/search.json?key=${this.token}&q=${searchQuery}`)
        return searchResult.data;
    };

    getCity = async (name: string): Promise<WeatherAPI> => {
        const searchResult = await this.axiosInstance.get(`/current.json?key=${this.token}&q=${name}&aqi=yes`)
        return searchResult.data;
    };
}

export interface WeatherAPI {
    location: Location;
    current: Current;
}

export interface Current {
    last_updated_epoch: number;
    last_updated: string;
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: Condition;
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    vis_km: number;
    vis_miles: number;
    uv: number;
    gust_mph: number;
    gust_kph: number;
}

export interface Condition {
    text: string;
    icon: string;
    code: number;
}

export interface Location {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
}
