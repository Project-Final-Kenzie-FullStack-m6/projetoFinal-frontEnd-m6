import axios from "axios";
import { BaseUrl, BaseUrl2 } from "../constants/endpoints";

export const Api = axios.create({
    baseURL: BaseUrl,
    timeout: 5000,
})


export const Api2 = axios.create({
    baseURL: BaseUrl2,
    timeout: 5000,
})

export const Api3 = axios.create({
    baseURL: "https://api.imgur.com/3/image",
    headers:{'Authorization': 'Client-ID 4a7e52653f829d7',
    'Content-Type': 'application/x-www-form-urlencoded'},
    timeout: 5000,
})