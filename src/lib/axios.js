import axios from "axios";

const api = axios.create({
    baseURL : "https://eventsphere-server-mfdb.onrender.com"
})

api.interceptors.request.use(
    (req) => {
        return req
    }, 
    (err) => {}
)

api.interceptors.response.use(
    (res) => {
        return res.data.data
    }, 
    (err) => {}
)

export default api;