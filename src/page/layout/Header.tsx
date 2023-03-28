import { useContext, useEffect, useState } from 'react';
import { Button, Divider, Layout, Menu, MenuProps, Space } from 'antd';
import AuthContext from "../../store/auth-context";
import { getData } from "../../model/token";
import { Link, useLocation } from "react-router-dom";

const advMenu: MenuProps['items'] = [
    { label: <Link to="/adv/reg">광고 등록</Link>, key: 'reg', icon: <i className="ico ico-menu-01 ant-menu-item-icon" /> },
    { label: <Link to="/adv/mng/adv-info">광고 관리</Link>, key: 'mng', icon: <i className="ico ico-menu-02 ant-menu-item-icon" /> },
]

const admMenu: MenuProps['items'] = [
    { label: <Link to="/adm/isp-kwd">키워드 검수</Link>, key: 'isp-kwd', icon: <i className="ico ico-menu-01 ant-menu-item-icon" /> },
    { label: <Link to="/adm/isp-ad">광고 검수</Link>, key: 'isp-ad', icon: <i className="ico ico-menu-02 ant-menu-item-icon" /> },
    { label: <Link to="/adm/cs-ad">광고 현황</Link>, key: 'cs-ad', icon: <i className="ico ico-menu-02 ant-menu-item-icon" /> },
]

const Header = () => {
    const [current, setCurrent] = useState<string>("");
    const location = useLocation();
    const { Header } = Layout;
    const authCtx = useContext(AuthContext);
    const roleGroups = getData('auth');

    const moveAdvPage: MenuProps['onClick'] = (e) => {
        // setCurrent(e.key)
        localStorage.setItem('tab', e.key)
    };
    
    const moveAdminPage: MenuProps['onClick'] = (e) => {
        // setCurrent(e.key)
        localStorage.setItem('tab', e.key)
    };

    function logoutEvent() {
        authCtx.logout()
    }

    useEffect(() => {
        if(location.pathname.includes("reg")) setCurrent("reg")
        else if(location.pathname.includes("mng")) setCurrent("mng")
        else if(location.pathname.includes("isp-kwd")) setCurrent("isp-kwd")
        else if(location.pathname.includes("isp-ad")) setCurrent("isp-ad")
        else if(location.pathname.includes("cs-ad")) setCurrent("cs-ad")
        else setCurrent("");
    }, [location])

    return (
        <>
            <Header>
                <a className="logo">
                    <span>NHNAD</span> Bidding Solution</a>
                {roleGroups === "ROLE_ADV" && <Menu onClick={moveAdvPage} selectedKeys={[current]} mode="horizontal" items={advMenu} />}
                {roleGroups === "ROLE_ADMIN" && <Menu onClick={moveAdminPage} selectedKeys={[current]} mode="horizontal" items={admMenu} />}

                <div className="user-info">
                    <Space split={<Divider type="vertical" />}>
                        <Space>
                            <i className="ico ico-user-info"></i>
                            <span className="fz-16 fc-gray-300">{localStorage.getItem('id')}</span>
                        </Space>
                        <Button className="gray" size="small" onClick={logoutEvent}>로그아웃</Button>
                    </Space>
                </div>
            </Header>
        </>
    );
}

export default Header;