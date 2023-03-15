import { Layout } from 'antd';
import { useContext, useEffect, PropsWithChildren } from 'react';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import RegContent from './components/registerAd/RegContent';
import NavigateLanding from "./NavigateLanding";
const { Content } = Layout;



const Home = ({ children }: PropsWithChildren) => {
    return (
        <NavigateLanding>
            <Layout>
                <Header />
                <Content>
                    <RegContent />
                </Content>
                <Footer />
            </Layout>
        </NavigateLanding>
    );
}

export default Home;