import React from 'react';
import { Layout } from 'antd';
import ContentHeader from '../page/content/ContentHeader';
interface props {
    name: string
}

const Body = () => {
    const { Content } = Layout
    return (
        <>
            <Content>
                <div className="site-layout-content">
                    <div className="inner-content">
                        <ContentHeader />
                    </div>
                </div>
            </Content>
        </>
    );
}

export default Body;