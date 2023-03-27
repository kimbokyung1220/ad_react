import RegContent from './components/registerAd/RegContent';
import { Route, Routes } from "react-router-dom";
import Body from "./layout/Body";
import AdvInfoContent from './components/managementAd/advInfo/AdvInfoContent';
import { getData } from "../model/token";
import IspKwdContent from './components/admin/inspectKeyword/IspKwdContent';
import AdGroupInfoContent from './components/managementAd/groupInfo/AdGroupInfoContent';
import KeywordContent from './components/managementAd/kwdInfo/KeywordContent';
import IspAdContent from './components/admin/inspectAd/IspAdContent';
import CsAdContent from './components/admin/currentSituationAd/CsAdContent';

const Home = () => {
    const roleGroups = getData('auth');
    return (

        <Body>
            {roleGroups === "ROLE_ADV" &&
                <Routes>
                    <Route element={<RegContent />} />
                    <Route element={<AdvInfoContent />} />
                    <Route element={<AdGroupInfoContent />} />
                    <Route element={<KeywordContent />} />
                </Routes>
            }

            {roleGroups === "ROLE_ADMIN" &&
                <Routes>
                    <Route element={<IspKwdContent />} />
                    <Route element={<IspAdContent />} />
                    <Route element={<CsAdContent />} />
                </Routes>
            }

        </Body>

    );
}

export default Home;