import axios from "../Config/axios.config";

const handleRegisterNewAccount = async (user) => {

    try {
        const response = await axios.post(
            `${import.meta.env.VITE_BACKEND_BASE_URL}/register`,
            user,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
        return response;
    } catch (error) {
        return error.response;
    }
}

const handleLogin = async (user) => {
    try {
        const response = await axios.post(
            `${import.meta.env.VITE_BACKEND_BASE_URL}/login`,
            user,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
        return response;
    }
    catch (error) {
        return error.response;
    }
}

const fetchProfileInfo = async (token) => {
    try {
        const response = await axios.get(
            `${import.meta.env.VITE_BACKEND_BASE_URL}/profile`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        return response;
    } catch (error) {
        return error.response;
    }
}
export {
    handleRegisterNewAccount, handleLogin, fetchProfileInfo
}



