import React from 'react';
import RadarChart from './RadarChart'; // Импорт компонента диаграммы
import './sass/styles.scss';
// import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <h1>Диаграмма характеристик пользователя</h1> {/* Заголовок */}
        <RadarChart /> {/* Компонент с диаграммой */}
      {/* </header> */}
    </div>
  );
}

export default App;
