import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.API_TOKEN_URL
});

axiosInstance.interceptors.request.use((config) => {
    config.headers["Content-Type"] = `application/json`;
    config.headers["X-Auth-Token"] = `${process.env.API_MATCHES_TOKEN}`;

    return config;
});

export default axiosInstance;