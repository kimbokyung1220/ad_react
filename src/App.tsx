import './css/common.css';
import './css/layout.css';
import './css/plugin.css';
import './css/fonts/NanumSquareNeo/fonts.css';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from "./page/Home";
import NavigateLanding from './page/NavigateLanding';
import Notfound from './page/Notfound';
import Login from './page/Login';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavigateLanding />} />
          <Route path="/common/login" element={<Login />} />
          <Route path="/adv/reg" element={<Home />} />
          <Route path="/404" element={<Notfound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
        {/* {!authCtx.isLoggedIn ?
          <Routes>
            <Route path="/*" element={<Navigate replace to="/common/login" />} />
            <Route path="/common/login" element={<Login />} />
          </Routes>
          :
          <Routes>
            <Route path="/" element={<Navigate replace to="/adv/reg" />} />
            <Route path="*" element={<Navigate replace to="/adv/reg" />} />
            <Route path="/adv/reg" element={<Home />} />
           
          </Routes>
        } */}
      </BrowserRouter>
      {/* switch, ecaxt, react-rout-dom */}
    </>
  );
}

export default App;
