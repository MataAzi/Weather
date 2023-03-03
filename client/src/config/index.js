import axios from "axios";

export const API_KEY = "bb57bf6d41fb4939b5d180443230103";
export const axiosInstance = axios.create({
  baseURL: import.meta.env.API_URL
    ? import.meta.env.API_URL
    : "https://weather-zb2n.onrender.com/",
});
