import { useContext, useEffect, PropsWithChildren } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import AuthContext from '../store/auth-context';

const NavigateLanding = ({ children }: PropsWithChildren) => {
    // const authCtx = useContext(AuthContext);
    // const navigate = useNavigate();
    // useEffect(() => {
    //     // if(role == admin)
    //     // authCtx.isLoggedIn ? navigate ("/adv/reg") : navigate("/common/login")
    //     authCtx.isLoggedIn ? <Navigate to="/adv/reg" />  :  <Navigate to="/common/login" />
    // }, [authCtx])
    return (
        <>
            {children}
        </>
    );
}

export default NavigateLanding;