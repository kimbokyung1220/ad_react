import { Layout } from 'antd';
import RegContent from './components/registerAd/RegContent';
import NavigateLanding from "./NavigateLanding";
import { Route, Routes } from "react-router-dom";
import Body from "./layout/Body";
import AdvInfoContent from './components/managementAd/advInfo/AdvInfoContent';
import { getData } from "../model/token";
import IspContent from "./components/inspectAd/IspContent";
import { useContext } from "react";
import AuthContext from "../store/auth-context";

const Home = () => {
    const roleGroups = getData('auth');
    return (
        <NavigateLanding>
            <Body>
                {roleGroups === "ROLE_ADV" &&
                    <Routes>
                        <Route element={<RegContent />} />
                        <Route element={<AdvInfoContent />} />
                    </Routes>
                }

                {roleGroups === "ROLE_ADMIN" &&
                    <Routes>
                        <Route element={<IspContent />} />
                    </Routes>
                }

            </Body>
        </NavigateLanding>
    );
}

export default Home;