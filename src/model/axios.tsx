import axios from "axios";
import { getToken } from './token';
import { BASE_URL } from '../config'

const authorization = getToken("Authorization")
const refreshToken = getToken("Refresh_Token")

const headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
    Authorization: authorization,
    Refresh_Token: refreshToken,
}

if (authorization !== undefined && authorization !== null) {
    headers.Authorization = authorization;
}
if (refreshToken !== undefined && refreshToken !== null) {
    headers.Refresh_Token = refreshToken;
}

const instance = axios.create({
    baseURL: BASE_URL,
    headers,
});

export const requestLogin = async (data: {}) => {
    const response = await instance.post(`/common/login`, data)
    return response
}

export const getItemList = async (data: {}) => {
    const response = await instance.post(`/api/item`, data)
    console.log("[API] getItemList")
    console.log(response)
    return response.data
}

export const getAgroupList = async () => {
    const response = await instance.get(`/api/agroup`)
    console.log("response.headers")
    console.log(response.headers)
    console.log("[API] getAgroupList")
    console.log(response)
    return response.data
}

export const createAgroup = async (data: {}) => {
    const response = await instance.post(`/api/agroup`, data)
    console.log("[API] createAgroup")
    console.log(response)
    return response.data
}