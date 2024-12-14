import React from 'react';
import classes from './_recover.module.scss';
import { Link } from 'react-router-dom';
import BackButton from '../../UI/backButton/backButton';

const Recover = () => { 
  return (
    <div className={classes.container}>
    <BackButton />
      <div className={classes.authorization__menu}>
        <div className={classes.autorization_container}>
          <div className={classes.navbar_logo}>
            <span className={classes.logo_part1}>DIGITAL</span>
            <span className={classes.logo_part2}>USER</span>
          </div>
        </div>

        <div className={classes.authorization_title_container}>
          <h2 className={classes.authorization__title}>Забыли пароль</h2>
        </div>

        <div className={classes.authorization__form}>
          <input
            className={classes.authorization__input}
            placeholder="Введите E-mail"
            type="e-mail"
          />
          <button className={classes.autorization_button}>Получить письмо</button>
          <div className={classes.autorization__footer}>
            <div className={classes.autorization__text_wrapper}>
              <p className={classes.authorization__text}>Нет аккаунта?</p>
              <p className={classes.authorization__text}>Забыли пароль?</p>
            </div>
            <div className={classes.autorization__link_wrapper}>
              <Link to="/registration" className={classes.authorization__link}>Зарегистрироваться</Link>
              <Link to="/authorization" className={classes.authorization__link}>Войти</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recover;
