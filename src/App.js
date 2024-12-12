import React from 'react';
import RadarChart from './RadarChart'; // Импорт компонента диаграммы
import './css/styles.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/UI/navbar/navbar';
import UserMenu from './components/UI/UserMenu/UserMenu';
import Authorization from './components/pages/authorization/authorization';
import Registration from './components/pages/registration/registration';
import Recover from './components/pages/recover/recover';
import Redirect from './components/pages/redirect/redirect';
import Profile from './components/pages/profile/Profile';
import GroupBlock from './components/UI/GroupBlock/GroupBlock';
import Footer from './components/UI/footer/footer';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <Routes>
            {/* Главная страница */}
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <section className="main_info">
                    <UserMenu />
                    <div className="project_description">
                      <h2 className="project_description_main">Наш проект</h2>
                      <p className="project_description_p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eleifend arcu et pulvinar sollicitudin. Nulla eget tortor augue. Sed felis mauris, laoreet et mollis sed, feugiat sit amet arcu. Ut vehicula lacus eu turpis placerat interdum. Duis ultricies gravida vehicula. Quisque porttitor tortor sit amet eros faucibus, sit amet facilisis tortor tempor.
                      </p>
                    </div>
                  </section>
                  <header className="App-header">
                    <h1 className="chart-title">Статистика</h1>
                    <div className="chart-wrapper">
                      <RadarChart />
                    </div>
                    <div className="chart__btn-wrapper">
                      <button className="chart__btn">За день</button>
                      <button className="chart__btn">За месяц</button>
                      <button className="chart__btn">За всё время</button>
                    </div>
                  </header>
                  <GroupBlock />
                  <Footer />
                </>
              }
            />
            {/* Страница авторизации */}
            <Route path="/profile" element={<Profile />} />
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
