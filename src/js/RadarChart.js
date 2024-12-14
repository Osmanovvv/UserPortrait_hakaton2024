import React from 'react';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const RadarChart = () => {
  const data = {
    labels: [
      'Активность',
      'Позитивность',
      'Частота сообщений',
      'Нарушения правил',
      'Токсичность',
      'Любопытство',
      'Отзывчивость',
    ],
    datasets: [
      {
        label: 'Характеристики пользователя',
        data: [80, 65, 75, 20, 30, 70, 85],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'white', // Цвет текста легенды
          font: {
            size: 14, // Размер шрифта
            weight: 'normal', // Вес шрифта
          },
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)', // Цвет фона подсказки
      },
    },
    scales: {
      r: {
        grid: {
          color: 'white', // Цвет линии сетки (паутинки)
        },
        pointLabels: {
          color: 'white', // Цвет текста для меток оси (характеристики)
          font: {
            size: 14,
            weight: 'normal',
          },
        },
      },
    },
  };

  return (
    <div style={{ width: '500px', height: '500px', margin: '0 auto' }}>
      <Radar data={data} options={options} />
    </div>
  );
};

export default RadarChart;
