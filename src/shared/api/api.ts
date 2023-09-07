import { BACKEND_URL } from "./config.ts";
import axios from 'axios'

export const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: 1000
})