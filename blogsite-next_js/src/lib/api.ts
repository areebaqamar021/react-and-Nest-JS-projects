import { BASE_URL } from "@src/config";
import axios from "axios";

const api = axios.create({
    baseURL: BASE_URL,
})

export default api