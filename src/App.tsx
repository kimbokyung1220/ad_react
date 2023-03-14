import './css/common.css';
import './css/layout.css';
import './css/plugin.css';
import './css/fonts/NanumSquareNeo/fonts.css';

import React, { useContext } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from "./components/Login";
import AuthContext from './store/auth-context';
import Home from "./components/Home";


function App() {
  const authCtx = useContext(AuthContext);

  return (
    <>
      <BrowserRouter>
        {!authCtx.isLoggedIn ?
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
        }

      </BrowserRouter>
    </>
  );
}

export default App;
