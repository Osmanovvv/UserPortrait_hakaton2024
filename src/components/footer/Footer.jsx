// Footer.jsx
import React from 'react';
import classes from './_Footer.module.scss';

const Footer = ({ children }) => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerContent}>
        {children}
        <div className={classes.navbarLogo}>
          <span className={classes.logoPart1}>DIGITAL</span>
          <span className={classes.logoPart2}>USER</span>
        </div>
        <ul className={classes.footer__itemsFirst}>
          <li>Группы</li>
          <li>Ввод данных</li>
          <li>Статистика</li>
        </ul>

        <ul className={classes.footer__itemsSecond}>
          <li>Статистика чатов</li>
          <li>Статистика сообщений</li>
          <li>Сообщения</li>
        </ul>
      <div className={classes.footer__img_text_container}>
        <div className={classes.footer__iconsWrapper}>
          <li className={classes.icons__item}><img src="../../images/VK.png" alt="vk" /></li>
          <li className={classes.icons__item}><img src="../../images/tg.png" alt="tg" /></li>
          <li className={classes.icons__item}><img src="../../images/gitlab.png" alt="gitlab" /></li>
        </div>
        <p className={classes.footer__text}>© makde by LylaKebabTeam</p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
