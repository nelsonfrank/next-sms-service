import Axios from 'axios'

const instance = Axios.create({
    baseURL: process.env.SMS_BASE_URL,
    headers: {
        "Authorization": process.env.AUTH_TOKEN,
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
});

export default instance;