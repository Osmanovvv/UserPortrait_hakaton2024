import React from 'react';
import classes from './_registration.module.scss';
import { Link } from 'react-router-dom';

const Registration = () => { 
  return (
    <div className={classes.container}>
      <div className={classes.authorization__menu}>
        <div className={classes.autorization_container}>
          <div className={classes.navbar_logo}>
            <span className={classes.logo_part1}>DIGITAL</span>
            <span className={classes.logo_part2}>USER</span>
          </div>
        </div>

        <div className={classes.authorization_title_container}>
          <h2 className={classes.authorization__title}>Создать аккаунт</h2>
        </div>

        <div className={classes.authorization__form}>
          <input
            className={classes.authorization__input}
            placeholder="Введите логин"
            type="text"
          />
          <input
            className={classes.authorization__input}
            placeholder="Введите E-mail"
            type="e-mail"
          />
          <input
            className={classes.authorization__input}
            placeholder="Введите пароль"
            type="password"
          />
          <button className={classes.autorization_button}>Регистрация</button>
          <div className={classes.autorization__footer}>
            <div className={classes.autorization__text_wrapper}>
              <p className={classes.authorization__text}>Есть аккаунт?</p>
              <p className={classes.authorization__text}>Забыли пароль?</p>
            </div>
            <div className={classes.autorization__link_wrapper}>
              <Link to="/authorization" className={classes.authorization__link}>Войти</Link>
              <Link to="/recover" className={classes.authorization__link}>Восстановить</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
