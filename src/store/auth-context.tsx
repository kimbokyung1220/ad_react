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
    id: localStorage.getItem('id'),
    isLoggedIn: false,
    login: (data: any) => { },
    logout: () => { },
    ItemList: (data: any) => { },
});

//Context의 Provider 역할, 즉 Context의 변화를 알리는 Provider 컴포넌트를 반환하는 함수
export const AuthContextProvider: React.FC<Props> = (props) => {

    const [token, setToken] = useState(localStorage.getItem('Authorization'));
    const [rfToken, setRfToken] = useState(localStorage.getItem('Refresh_Token'));
    const [auth, setAuth] = useState(localStorage.getItem('auth'));
    const [id, setId] = useState(localStorage.getItem('id'));

    const [items, setItems] = useState([]);

    // 토큰값으로 check
    const userIsLoggedIn = !!token;

    // 1. 로그인 함수
    const loginHandler = (res: any) => {
        setToken('Bearer ' + res.data.accessToken)
        setRfToken(res.data.refreshToken)
        setAuth(res.data.authority)
        setId(res.data.memberId)
        console.log(res.data)
    };

    // 2. 먼저 이 함수는 이후 useEffect를 통해 토큰이 없어지면 자동으로 로그아웃을 실행하게 할 것이므로, 무한루프를 막기 위해 useCallback으로 감싸줌
    const logoutHandler = useCallback(() => {
        setToken(null);
        setRfToken(null);
        setAuth(null);
        setId(null);
    }, []);


    //3. 상품 조회
    const itemHandler = (data: any) => {
        console.log("컨텍스트 data")
        console.log(data)
        setItems(data);
        console.log(items);

    }

    // retrieveStoredToken로 받은 token값과, logoutHandler를 종속변수로 삼는 useEffect훅
    useEffect(() => {
        if (token !== null && rfToken !== null && auth !== null && id !== null) {
            localStorage.setItem('Authorization', token);
            localStorage.setItem('Refresh_Token', rfToken);
            localStorage.setItem('auth', auth);
            localStorage.setItem('id', id);
            
        } else {
            localStorage.clear();
        }
    }, [token, items]);


    const contextValue = {
        token,
        auth,
        id,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
        ItemList: itemHandler
    }


    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;