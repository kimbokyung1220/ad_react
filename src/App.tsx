import './css/common.css';
import './css/layout.css';
import './css/plugin.css';
import './css/fonts/NanumSquareNeo/fonts.css';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from "./components/Login";
import Home from "./components/Home";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/main" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
