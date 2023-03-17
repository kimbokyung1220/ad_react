import { Layout } from 'antd';
import { PropsWithChildren } from 'react';
import IspContent from "./components/inspectAd/IspContent";
import Footer from './layout/Footer';
import Header from './layout/Header';
import RegContent from './components/registerAd/RegContent';
import NavigateLanding from "./NavigateLanding";
import MngContent from "./components/managementAd/MngContent";
import { Route, Routes } from "react-router-dom";
import Body from "./layout/Body";
const { Content } = Layout;


const Home = () => {
    return (
        <NavigateLanding>
            <Body>
                <Routes>
                    <Route path="/adv/reg" element={<RegContent />} />
                    <Route path="/adv/mng" element={<MngContent />} />
                </Routes>
            </Body>
        </NavigateLanding>
    );
}

export default Home;