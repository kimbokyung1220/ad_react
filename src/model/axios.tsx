import axios from "axios";
import { getToken } from './token';
import { BASE_URL } from '../config'

interface headers {
    Authorization: string;

}

const authorization = getToken("Authorization")
const refreshToken = getToken("Refresh_Token")

const headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
    // Authorization : null, 
    // // Refresh_Token: null,
}

// if (authorization !== undefined && authorization !== "") {
//     headers.Authorization = authorization;
// }
// if (refreshToken !== undefined && refreshToken !== "") {
//     headers.Refresh_Token = refreshToken;
// }

const instance = axios.create({
    baseURL: BASE_URL,
    headers,
});

export const requestLogin = async (data: {}) => {
    const response = await instance.post(`/common/login`, data)
    console.log("[API] requestLogin")
    console.log(response)
    return response.data
}

export const getItemList = async (data: {}) => {
    const response = await instance.post(`/api/item`, data)
    console.log("[API] getItemList")
    console.log(response)
    return response.data
}