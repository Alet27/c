import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SideMenu from './components/SideMenu/SideMenu';
import MainContent from './components/MainContent/MainContent';
import Main from './components/Main/Main';
import Account from './components/Account/Account';
import Standart from './components/Standart/Standart';
import Low from './components/Low/Low';
import Big from './components/Big/Big';
import Fast from './components/Fast/Fast';
import Coin_flip from './components/Coin_flip/Coin_flip';
import History from './components/History/History';
import Draw from './components/Draw/Draw';
import Top from './components/Top/Top';
import Index from './components/Index/Index';
import Rules from './components/Header/Rules/Rules.js';
import axios from 'axios';
import './App.css'
import AuthContext from './AuthContext.js'
axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

function PageWithSideMenu({ children }) {
  return (
    <>
      <SideMenu />
      {children}
    </>
  );
}

function PageWithHeader({ children, balance, setBalance }) {
  return (
    <>
      <Header balance={balance} setBalance={setBalance} />
      {children}
    </>
  );
}


function AppContent() {
  const navigate = useNavigate();
  const [balance, setBalance] = useState(15600);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ logout: handleLogout }}>
      <div className="App">
        <div className="App-content">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/*" element={
              <PageWithHeader balance={balance} setBalance={setBalance}>
                <Routes>
                  <Route path="/main" element={<PageWithSideMenu><Main /></PageWithSideMenu>} />
                  <Route path="/account" element={<PageWithSideMenu><Account balance={balance} setBalance={setBalance} /></PageWithSideMenu>} />
                  <Route path="/standart" element={<PageWithSideMenu><Standart balance={balance} setBalance={setBalance} /></PageWithSideMenu>} />
                  <Route path="/low-game" element={<PageWithSideMenu><Low /></PageWithSideMenu>} />
                  <Route path="/big-game" element={<PageWithSideMenu><Big /></PageWithSideMenu>} />
                  <Route path="/fast-game" element={<PageWithSideMenu><Fast /></PageWithSideMenu>} />
                  <Route path="/coin-flip" element={<PageWithSideMenu><Coin_flip /></PageWithSideMenu>} />
                  <Route path="/history" element={<PageWithSideMenu><History /></PageWithSideMenu>} />
                  <Route path="/draw" element={<PageWithSideMenu><Draw /></PageWithSideMenu>} />
                  <Route path="/top" element={<PageWithSideMenu><Top /></PageWithSideMenu>} />
                  <Route path="/rules" element={<Rules />} />

                </Routes>
              </PageWithHeader>
            } />
          </Routes>
        </div>
        <Footer />
      </div>
    </AuthContext.Provider>

  );
}
function App() {
  const [balance, setBalance] = useState(15600);


  return (
    <Router>

      <AppContent />
    </Router>
  );
}


export default App;
