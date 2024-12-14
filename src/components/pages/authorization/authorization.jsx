import React from 'react';
import classes from './_authorization.module.scss';
import { Link } from 'react-router-dom';
import BackButton from '../../UI/backButton/backButton';

const Authorization = () => {
  return (
    <div className={classes.container}>
    <BackButton />
      <div className={classes.authorization__menu}>
        <div className={classes.authorization_container}>
          <Link to="/" className={classes.navbar_logo}>
            <span className={classes.logo_part1}>DIGITAL</span>
            <span className={classes.logo_part2}>USER</span>
          </Link>
        </div>

        <div className={classes.authorization_title_container}>
          <h2 className={classes.authorization__title}>Авторизация</h2>
        </div>

        <div className={classes.authorization__form}>
          <input
            className={classes.authorization__input}
            placeholder="Введите логин"
            type="text"
          />
          <input
            className={classes.authorization__input}
            placeholder="Введите пароль"
            type="password"
          />
          <button className={classes.authorization_button}>Вход</button>
          <div className={classes.authorization__footer}>
            <div className={classes.authorization__text_wrapper}>
              <p className={classes.authorization__text}>Нет аккаунта?</p>
              <p className={classes.authorization__text}>Забыли пароль?</p>
            </div>
            <div className={classes.authorization__link_wrapper}>
              <Link to="/registration" className={classes.authorization__link}>
                Зарегистрироваться
              </Link>
              <Link to="/recover" className={classes.authorization__link}>
                Восстановить
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authorization;
