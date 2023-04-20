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