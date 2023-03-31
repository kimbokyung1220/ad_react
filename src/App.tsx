import './css/common.css';
import './css/layout.css';
import './css/plugin.css';
import './css/fonts/NanumSquareNeo/fonts.css';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './page/Login';
import { useContext } from "react";
import AuthContext from "./store/auth-context";
import RegContent from "./page/components/registerAd/RegContent";
import AdvInfoContent from './page/components/managementAd/advInfo/AdvInfoContent';
import AdGroupInfoContent from './page/components/managementAd/groupInfo/AdGroupInfoContent';
import KeywordContent from "./page/components/managementAd/kwdInfo/KeywordContent";
import { getData } from "./model/token";
import IspKwdContent from './page/components/admin/inspectKeyword/IspKwdContent';
import IspAdContent from './page/components/admin/inspectAd/IspAdContent';
import CsAdContent from './page/components/admin/currentSituationAd/CsAdContent';
import TaskMngContent from "./page/components/admin/taskManagement/taskMngContent";


function App() {
  const authCtx = useContext(AuthContext);
  const roleGroups = getData('auth');
  const path = roleGroups === "ROLE_ADV" ? "/adv/reg" : "/adm/isp-kwd"
  return (
    <>
      <BrowserRouter>
        {!authCtx.isLoggedIn?
          <Routes>
            <Route path="/*" element={<Navigate replace to="/common/login" />} />
            <Route path="/common/login" element={<Login />} />
          </Routes>
          :
      
        <Routes>
          <Route path="/common/login" element={<Navigate replace to={path} />} />
          <Route path="/" element={<Navigate replace to={path} />} />
          {/* <Route path="*" element={<Navigate replace to="/adv/reg" />} /> */}
          <Route path="/adv/reg" element={<RegContent />} />
          <Route path="/adv/mng/adv-info" element={<AdvInfoContent />} />
          <Route path="/adv/mng/ag-info/:agroupId" element={<AdGroupInfoContent />} />
          <Route path="/adv/mng/kwd-info/:adId" element={<KeywordContent />} />
          <Route path="/adm/isp-kwd" element={<IspKwdContent />} />
          <Route path="/adm/isp-ad" element={<IspAdContent />} />
          <Route path="/adm/isp-task" element={<TaskMngContent />} />
          <Route path="/adm/cs-ad" element={<CsAdContent />} />
        </Routes>
        }
      </BrowserRouter>
      {/* switch, ecaxt, react-rout-dom */}
    </>
  );
}

export default App;
