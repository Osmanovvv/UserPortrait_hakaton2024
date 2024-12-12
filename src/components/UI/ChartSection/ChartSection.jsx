import React from 'react';
import RadarChart from '../RadarChart';
import classes from './_ChartSection.module.css';

const ChartSection = () => {
  return (
    <section className={classes.chartSection}>
      <header>
        <h1 className={classes.chartTitle}>Статистика</h1>
      </header>
      <div className={classes.chartWrapper}>
        <RadarChart />
      </div>
      <div className={classes.btnWrapper}>
        <button className={classes.chartBtn}>За день</button>
        <button className={classes.chartBtn}>За месяц</button>
        <button className={classes.chartBtn}>За всё время</button>
      </div>
    </section>
  );
};

export default ChartSection;
