import './css/common.css';
import './css/layout.css';
import './css/plugin.css';
import './css/fonts/NanumSquareNeo/fonts.css';

import React, { useContext } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from "./components/Login";
import AuthContext from './store/auth-context';
import HomeContent from './components/page/HomeContent';


function App() {
  const authCtx = useContext(AuthContext);

  return (
    <>
      <BrowserRouter>
        {!authCtx.isLoggedIn ?
          <Routes>
            <Route path="/*" element={<Navigate replace to="/login" />} />
            <Route path="*" element={<Navigate replace to="/login" />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          :
          <Routes>
            <Route path="/*" element={<Navigate replace to="/home" />} />
            <Route path="*" element={<Navigate replace to="/home" />} />
            <Route path="/home" element={<HomeContent />} />
          </Routes>
        }

      </BrowserRouter>
    </>
  );
}

export default App;
