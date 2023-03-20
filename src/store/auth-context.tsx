import React, { useState, useEffect, useCallback } from "react";

type Props = { children?: React.ReactNode }

// createContext는 각각의 컴포넌트에 포함되는 객체를 만드는 로직
const AuthContext = React.createContext({
    token: localStorage.getItem('Authorization'),
    moveMenu: (data: any) => { },
    menu: sessionStorage.getItem('menu'),
    isLoggedIn: false,
    login: (data: any) => { },
    logout: () => { },
});

//Context의 Provider 역할, 즉 Context의 변화를 알리는 Provider 컴포넌트를 반환하는 함수
export const AuthContextProvider: React.FC<Props> = (props) => {

    const [token, setToken] = useState(localStorage.getItem('Authorization'));
    const [menu, setMenu] = useState(sessionStorage.getItem('menu'))

    // 토큰값으로 check
    const userIsLoggedIn = !!token;

    // 1. 로그인 함수
    const loginHandler = (res: any) => {

        localStorage.setItem('Authorization', `Bearer ${res.data.accessToken}`);
        localStorage.setItem('Refresh_Token', res.data.refreshToken);
        localStorage.setItem('auth', res.data.authority);
        localStorage.setItem('id', res.data.memberId);
        sessionStorage.setItem('menu', 'res');

        setToken(`Bearer ${res.data.accessToken}`)


        console.log(res.data)
    };

    // 2. 먼저 이 함수는 이후 useEffect를 통해 토큰이 없어지면 자동으로 로그아웃을 실행하게 할 것이므로, 무한루프를 막기 위해 useCallback으로 감싸줌
    const logoutHandler = useCallback(() => {
        setToken(null);
        localStorage.clear();
     
    }, []);

    // 메뉴 이동
    const moveMenuHandler = (data: any) => {
        sessionStorage.setItem('menu', data);
    }

    // retrieveStoredToken로 받은 token값과, logoutHandler를 종속변수로 삼는 useEffect훅
    useEffect(() => {

    }, [token, menu]);


    const contextValue = {
        token,
        moveMenu: moveMenuHandler,
        menu,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
    }


    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;