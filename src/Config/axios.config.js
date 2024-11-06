import axios from "axios";

// Create an axios instance
const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// Add a response interceptor
axiosInstance.interceptors.response.use(
    function (response) {

        return response;

    }, function (error) {
        return error && error.response;
    });

export default axiosInstance;