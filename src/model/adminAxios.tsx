import axios from "axios";
import { BASE_URL } from '../config'

const headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
}

export const instance = axios.create({
    baseURL: BASE_URL,
    headers,
});

// 요청시 AccessToken 계속 보내주기 [request 인터셉터 (클라이언트 -> 서버)]
instance.interceptors.request.use(
    (config: any) => {
        //데이터 전송 시 토큰 필요하면 여기서 추가하던가 하자.
        if (!config.headers) return config;
        let accessToken: string | null = null;
        accessToken = localStorage.getItem('Authorization');
        if (accessToken !== null) {
            config.headers.Authorization = accessToken
        }
        return config;
    },
    (err: any) => {
        console.log("api 요청 전 에러 발생했습니다.");
        console.log(err);
        return Promise.reject(err);
    },
);

/**
 * 검수 대상 키워드 조회
 */
export const requestSearchIspKwd = async (data: {}) => {
    const response = await instance.post(`api/kwd/isp/list`, data)
    return response.data
}
