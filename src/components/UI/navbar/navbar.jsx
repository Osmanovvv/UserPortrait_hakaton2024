import React from "react"; 
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import classes from "./_navbar.module.scss";

const Navbar = () => { 
  return ( 
    <div className={classes.main}>
        <nav className={classes.navbar}> 
          <div className={classes.navbarLogo}> 
            <span className={classes.logoPart1}>DIGITAL</span> 
            <span className={classes.logoPart2}>USER</span> 
          </div> 
          <ul className={classes.navbarLinks}>
            <li>
              <a href="#UserMenu">Данные</a>
            </li> 
            <li>
              <a href="#RadarChart">Статистика</a>
            </li> 
            <li>
              <a href="#Groups">Группы</a>
            </li> 
          </ul>
          <div className={classes.navbarBtnWrapper}> 
            <Link to="/Profile" className={classes.navbar__btn}>Профиль</Link>
            <Link to="/authorization" className={classes.navbar__btn}>Авторизация</Link>
          </div>
        </nav> 
    </div> 
  ); 
}; 

export default Navbar;
