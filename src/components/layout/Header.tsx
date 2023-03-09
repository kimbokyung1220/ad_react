import React, { useContext, useState } from 'react';
import { Button, Divider, Layout, Menu, MenuProps, Space } from 'antd';
import AuthContext from '../../store/auth-context';


const Header = () => {
    const authCtx = useContext(AuthContext);
    const { Header } = Layout;
    const roleGroups = localStorage.getItem('auth');
    const [current, setCurrent] = useState('mail');
    // const menu: MenuProps['items'] = [];

    const advMenu: MenuProps['items'] = [
        {
            label: '광고 등록',
            key: 'reg',
            icon: <i className="ico ico-menu-01 ant-menu-item-icon" />
        },
        {
            label: '광고 관리',
            key: 'mng',
            icon: <i className="ico ico-menu-02 ant-menu-item-icon" />
        },
    ]

    const admMenu: MenuProps['items'] = [
        {
            label: '광고 검수',
            key: 'isp',
            icon: <i className="ico ico-menu-01 ant-menu-item-icon" />
        },
    ]

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    function moveAdvPage() {
        window.location.href = "/adv";
    };

    function moveAdminPage() {
        window.location.href = "/admin";
    };

    function logoutEvent() {
        authCtx.logout()
    }
    return (
        <>
            <Header>
                <a className="logo"><span>NHNAD</span> Bidding Solution</a>
                {roleGroups === "ROLE_ADV" && <Menu onClick={moveAdvPage} selectedKeys={[current]} mode="horizontal" items={advMenu} />}
                {roleGroups === "ROLE_ADMIN" && <Menu onClick={moveAdminPage} selectedKeys={[current]} mode="horizontal" items={admMenu} />}

                <div className="user-info">
                    <Space split={<Divider type="vertical" />}>
                        <Space>
                            <i className="ico ico-user-info"></i>
                            <span className="fz-16 fc-gray-300">{sessionStorage.getItem('id')}</span>
                        </Space>
                        <Button className="gray" size="small" onClick={logoutEvent}>로그아웃</Button>
                    </Space>
                </div>
            </Header>
        </>
    );
}

export default Header;