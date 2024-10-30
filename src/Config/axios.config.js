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

        const status = (error && error.response && error.response.status) || 500;
        switch (status) {
            //Account already exists 
            //Conflict status code
            case 409:
                {
                    return error && error.response;
                }
            default: {
                return Promise.reject(error);
            }

        }
    });

export default axiosInstance;