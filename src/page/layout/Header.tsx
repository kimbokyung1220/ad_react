import { useContext, useState } from 'react';
import { Button, Divider, Layout, Menu, MenuProps, Space } from 'antd';
import AuthContext from "../../store/auth-context";
import { getData } from "../../model/token";
import { Link } from "react-router-dom";


const Header = () => {
    const { Header } = Layout;
    const authCtx = useContext(AuthContext);
    const roleGroups = getData('auth');
    const [current, setCurrent] = useState('reg');

    const advMenu: MenuProps['items'] = [
        { label: <Link to="/adv/reg">광고 등록</Link>, key: 'reg', icon: <i className="ico ico-menu-01 ant-menu-item-icon" /> },
        { label: <Link to="/adv/mng">광고 관리</Link>, key: 'mng', icon: <i className="ico ico-menu-02 ant-menu-item-icon" /> },
    ]

    const admMenu: MenuProps['items'] = [
        { label: '광고 검수', key: 'isp', icon: <i className="ico ico-menu-01 ant-menu-item-icon" /> },
    ]

    const moveAdvPage: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    function moveAdminPage() {
        window.location.href = "/adm/mng";
    };

    function logoutEvent() {
        authCtx.logout()
    }
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