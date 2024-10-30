import axios from "../Config/axios.config";

const registerNewAccount = async (user) => {

    try {
        console.log(import.meta.env.VITE_REGISTER_USER_URL);
        const response = await axios.post(
            import.meta.env.VITE_REGISTER_USER_URL,
            user,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
        return response;
    } catch (error) {
        return null;
    }
}

export {
    registerNewAccount
}



