import React, { PropsWithChildren } from 'react';
import { Layout } from "antd";
import Header from "./Header";
import Footer from "./Footer";
const { Content } = Layout;

const Body = ({ children }: PropsWithChildren) => {
    return (
        <>
            <Layout>
                <Header />
                <Content>
                    {children}
                </Content>
                <Footer />
            </Layout>
        </>
    );
}

export default Body;