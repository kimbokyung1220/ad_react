import { Layout } from 'antd';
import { PropsWithChildren } from 'react';
import IspContent from "./components/inspectAd/IspContent";
import Footer from './layout/Footer';
import Header from './layout/Header';
import RegContent from './components/registerAd/RegContent';
import NavigateLanding from "./NavigateLanding";
import { Route, Routes } from "react-router-dom";
import Body from "./layout/Body";
import AdvInfoContent from './components/managementAd/advInfo/AdvInfoContent';
const { Content } = Layout;


const Home = () => {
    return (
        <NavigateLanding>
            <Body>
                <Routes>
                    <Route path="/adv/reg" element={<RegContent />} />
                    <Route path="/adv/mng/advInfo" element={<AdvInfoContent />} />
                </Routes>
            </Body>
        </NavigateLanding>
    );
}

export default Home;