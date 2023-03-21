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
    ( config: any) => {
        //데이터 전송 시 토큰 필요하면 여기서 추가하던가 하자.
        if(!config.headers) return config;
        let accessToken: string | null = null;
        accessToken = localStorage.getItem('Authorization');
        if(accessToken !== null) {
            config.headers.Authorization = accessToken
        }
        return config;
    },
    ( err: any) => {
    console.log("api 요청 전 에러 발생했습니다.");
    console.log(err);
    return Promise.reject(err);
  },
);

/**
 * 로그인
 */
export const requestLogin = async (data: {}) => {
    const response = await instance.post(`/common/login`, data)
    return response
}

/**
 * 광고등록 - 상품조회
 */
export const requestItemAllList = async (data: {}) => {
    const response = await instance.post(`/api/item`, data)
    console.log("[API] getItemList")
    console.log(response)
    return response.data
}
/**
 * 광고등록 - 광고등록 시 광고그룹 생성
 * 광고관리 - 그룹추가
 */
export const requestCreateAgroup = async (data: {}) => {
    const response = await instance.post(`/api/agroup`, data)
    console.log("[API] createAgroup")
    console.log(response)
    return response
}
/**
 * 광고등록 - 광고그룹 선택 (광고그룹 리스트)
 */
export const getAgroupList = async () => {
    const response = await instance.get(`/api/agroup`)
    console.log("[API] getAgroupList")
    // console.log(response)
    return response.data
}
/**
 * 광고등록 - 광고 키워드 리스트 - 키워드 추가
 */
export const createKwds = async (data: {}) => {
    const response = await instance.post(`/api/kwd`, data)
    console.log("[API] createAgroup")
    console.log(response)
    return response.data
}

/**
 * 광고등록 - 광고 등록
 */
export const createAd = async (data: {}) => {
    const response = await instance.post(`/api/ad`, data)
    console.log("[API] createAgroup")
    console.log(response)
    return response
}

/**
 * 광고관리 - 광고주 계정 설정 및 정보 조회
 */
export const showAdvInfo = async () => {
    const response = await instance.get(`/api/adv`)
    console.log("[API] createAgroup")
    console.log(response)
    return response.data
}

/**
 * 광고관리 - 광고설정(광고 진행 활성 여부 변경)
 */
export const updateIngActYn = async (data: {}) => {
    const response = await instance.post(`/api/adv/ad-act`, data)
    console.log("[API] updateIngActYn")
    console.log(response)
    return response.data
}

/**
 * 광고관리 - 그룹 조회
 */
export const showAgroupItemList = async (data: {}) => {
    const response = await instance.post(`/api/agroup/list`, data)
    console.log("[API] AgroupSearch")
    console.log(response)
    return response.data
}

/**
 * 광고관리 - 그룹리스트 - 광고그룹 사용설정여부 변경(1개)
 */
export const updateAgUseConfig = async (data: {}) => {
    const response = await instance.post(`api/agroup/useConfig`, data)
    console.log("[API] updateAgUseConfig")
    console.log(response)
    return response
}


/**
 * 광고관리 - 그룹리스트 - 광고그룹 사용설정여부 변경(체크박스로)
 */





