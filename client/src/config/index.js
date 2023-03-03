import axios from "axios";

export const API_KEY = "bb57bf6d41fb4939b5d180443230103";
export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});
