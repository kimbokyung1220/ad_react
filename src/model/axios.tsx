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

export const instance = axios.create({
    baseURL: BASE_URL,
    headers,
});

//요청시 AccessToken 계속 보내주기 [request 인터셉터 (클라이언트 -> 서버)]
// instance.interceptors.request.use(
//     ( config: any) => {
//         //데이터 전송 시 토큰 필요하면 여기서 추가하던가 하자.
//         if(!config.headers) return config;
//         let accessToken: string | null = null;
//         accessToken = localStorage.getItem('Authorization');
//         if(accessToken !== null) {
//             config.headers.Authorization = `Bearer ${accessToken}`
//         }
//         return config;
//     },
//     ( err: any) => {
//     console.log("api 요청 전 에러 발생했습니다.");
//     console.log(err);
//     return Promise.reject(err);
//   },
// );


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