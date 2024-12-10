import axios from "axios";

export const request = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
    timeout: 0,
    headers: {'X-Custom-Header': 'foobar'}
})
request.interceptors.request.use(async (config) => {
    const token = localStorage.getItem("Token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

  