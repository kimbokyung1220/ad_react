import { useContext, useEffect, useState } from 'react';
import { Input, Button } from 'antd';
import AuthContext from '../store/auth-context';
import { requestLogin } from '../model/axios';

const Login = () => {
    const authCtx = useContext(AuthContext);

    const [memberId, setMemberId] = useState('');
    const [pwd, setPwd] = useState('');
    const [loginFail, setLoginFail] = useState<boolean>(false);

    const loginEvent = () => {
        console.log("loginEvent")
        const data = {
            'memberId': memberId,
            'pwd': pwd
        };
        requestLogin(data).then(res => {
            if (res !== null) {
                console.log(res)
                authCtx.login(res)

            }
        }).catch(error => {
            console.log("login error");
            console.log(error);
            setLoginFail(true)
        })
    }
    useEffect(() => {

    }, [loginFail])

    return (
        <>
            <div className="wrap login">
                <div className="box-inner">
                    <div className="box-left">
                        <div className="box-top">
                            <div className="logo">NHNAD Bidding Solution</div>
                            <div className="logo-sub">NHNAD 자동입찰 솔루션 로그인</div>
                        </div>
                        <div className="box-middle">
                            <div className="company-name">
                                <i className="ico ico-check"></i>
                                <span className="txt-company">DB손해보험</span>
                            </div>
                            <Input
                                name="email"
                                placeholder="아이디를 입력해주세요."
                                size="large"
                                prefix={<i className="ico ico-id"></i>}
                                // defaultValue={loginForm.email}
                                onChange={(e) => setMemberId(e.currentTarget.value)}
                                value={memberId}
                            />
                            <Input.Password
                                name={"password"}
                                placeholder="비밀번호를 입력해주세요."
                                size="large"
                                prefix={<i className="ico ico-pw"></i>}
                                // defaultValue={loginForm.password}
                                onChange={(e) => setPwd(e.currentTarget.value)}
                                value={pwd}
                                onPressEnter={loginEvent}
                            />
                            {loginFail && <p className="txt-error show">아이디 또는 비밀번호가 일치하지 않습니다.</p>}
                        </div>
                        <div className="box-bottom">
                            <Button type="primary" className="pink" size="large" block onClick={loginEvent}>로그인</Button>
                        </div>
                    </div>
                    <div className="box-right">
                        <img src={require('../images/img-login-object.jpg')} alt="NBS 솔루션 화면 이미지" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;