import React from 'react';
import '../css/styles.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../components/pages/HomePages/HomePage';
import Authorization from '../components/pages/authorization/authorization';
import Registration from '../components/pages/registration/registration';
import Recover from '../components/pages/recover/recover';
import Redirect from '../components/pages/redirect/redirect';
import Profile from '../components/pages/profile/profile';
import Settings from '../components/UI/settings/settings';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <Routes>
            {/* Главная страница */} 
            <Route path="/" element={<HomePage />} />
            {/* Остальные страницы */}
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Settings" element={<Settings />} />
            <Route path="/authorization" element={<Authorization />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/recover" element={<Recover />} />
            <Route path="/redirect" element={<Redirect />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
