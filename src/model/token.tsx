export const advId = localStorage.getItem('id');

export const getData = (name: string) => {
    return localStorage.getItem(name)
}

export const setData = (name: string, value: string) => {
    return localStorage.setItem(name, value)
}

export const removeData = (name: string) => {
    return localStorage.removeItem(name)
}

// export interface TokenInfo {
//     Authorization: string | null;
//     Refresh_Token: string | null;
// }

// export const tokenInfo: TokenInfo = {
//     Authorization: null,
//     Refresh_Token: null,
// };