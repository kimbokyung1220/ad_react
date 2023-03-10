import React, { PropsWithChildren } from 'react';
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import { Layout } from 'antd';
import ContentHeader from "./page/content/ContentHeader";
import RegContent from "./page/RegContent";
import ResultPrd from "./page/reg/component/ResultPrd";
const { Content } = Layout;



const Home = ({ children }: PropsWithChildren) => {
    return (
        <>
            <Layout>
                <Header />
                <Content>
                    <RegContent />
                </Content>
                <Footer />
            </Layout>
        </>
    );
}

export default Home;