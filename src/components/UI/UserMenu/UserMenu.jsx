import React from 'react';
import classes from './_UserMenu.module.scss';

const UserMenu = () => {
  return (
    <div className={classes.user_menu}>
      <div className={classes.navbar_logo}>
        <span className={classes.logo_part1}>DIGITAL</span>
        <span className={classes.logo_part2}>USER</span>
      </div>
      <input
        className={classes.user_menu_input}
        placeholder="Данные"
        type="text"
      />
      <button className={classes.user_menu_button}>Вперед</button>
    </div>
  );
};

export default UserMenu;

