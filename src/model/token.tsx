
export const getToken = (name: string) => {
    return localStorage.getItem(name)
}

export const setToken = (name: string, value: string) => {
    return localStorage.setItem(name, value)
}

export const removeToken = (name: string) => {
    return localStorage.removeItem(name)
}