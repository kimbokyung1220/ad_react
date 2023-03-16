import { Layout } from 'antd';
import { PropsWithChildren } from 'react';
import IspContent from "./components/inspectAd/IspContent";
import Footer from './layout/Footer';
import Header from './layout/Header';
import RegContent from './components/registerAd/RegContent';
import NavigateLanding from "./NavigateLanding";
const { Content } = Layout;



const Home = ({ children }: PropsWithChildren) => {
    const roleGroups = localStorage.getItem('auth');
    return (
        <NavigateLanding>
            <Layout>
                <Header />
                <Content>
                    {roleGroups === "ROLE_ADV" ? <RegContent /> : <IspContent />}
                </Content>
                <Footer />
            </Layout>
        </NavigateLanding>
    );
}

export default Home;