import React, { useState, useEffect, useCallback } from "react";

type Props = { children?: React.ReactNode }

type LoginToken = { 
    grantType: string,
    accessToken: string,
    tokenExpiresIn: number
}
// createContext는 각각의 컴포넌트에 포함되는 객체를 만드는 로직
const AuthContext = React.createContext({
    token: localStorage.getItem('accessToken'),
    auth: localStorage.getItem('auth'),
    id: sessionStorage.getItem('id'),
    isLoggedIn: false,
    login: (data: any) => { },
    logout: () => { }
});

//Context의 Provider 역할, 즉 Context의 변화를 알리는 Provider 컴포넌트를 반환하는 함수
export const AuthContextProvider: React.FC<Props> = (props) => {

    const [token, setToken] = useState(localStorage.getItem('accessToken'));
    const [auth, setAuth] = useState(localStorage.getItem('auth'));
    const [id, setId] = useState(sessionStorage.getItem('id'));

    // 토큰값으로 check
    const userIsLoggedIn = !!token;

    // 1. 로그인 함수
    const loginHandler = (data: any) => {
        setToken(data.accessToken)
        setAuth(data.authority)
        setId(data.memberId)
        console.log(data)
    };

    // 2. 먼저 이 함수는 이후 useEffect를 통해 토큰이 없어지면 자동으로 로그아웃을 실행하게 할 것이므로, 무한루프를 막기 위해 useCallback으로 감싸줌
    const logoutHandler = useCallback(() => {
        setToken(null);
        setAuth(null);
        setId(null);
    }, []);


    // retrieveStoredToken로 받은 token값과, logoutHandler를 종속변수로 삼는 useEffect훅
    useEffect(() => {
        if (token !== null && auth !== null && id !== null) {
            localStorage.setItem('accessToken', token);
            localStorage.setItem('auth', auth);
            sessionStorage.setItem('id', id);
            
        } else {
            localStorage.clear();
        }
    }, [token]);


    const contextValue = {
        token,
        auth,
        id,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }


    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;