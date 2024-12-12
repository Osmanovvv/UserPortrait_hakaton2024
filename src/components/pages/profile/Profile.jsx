import React from "react";
import classes from "./_Profile.module.scss";
import avatar from "../../images/ava.png";

const Profile = () => {
    return (
        <div className={classes.profile}>
            <div className={classes.profile_logo}>
                <span className="logo-part1">DIGITAL</span>
                <span className="logo-part2">USER</span>
            </div>
            <div className={classes.profile_menu}>
                <div className={classes.profile_menu_upper}>
                    <img 
                        className={classes.profile_menu_upper_avatar} 
                        src={avatar} 
                        alt="Avatar"
                    />
                    <div className={classes.profile_menu_upper_info}>
                        <h5 className={classes.profile_menu_upper_info_h}>Жак Фреско</h5>
                        <p className={classes.profile_menu_upper_info_p}>
                            <span className={classes.into_p}>E-mail:</span> theriddle@gmail.com
                        </p>
                        <p className={classes.profile_menu_upper_info_p}>
                            <span className={classes.into_p}>Номер телефона:</span> +7(978)-123-45-67
                        </p>
                        <p className={classes.profile_menu_upper_info_p}>
                            <span className={classes.into_p}>Telegram:</span> @loooool
                        </p>
                    </div>
                </div>
                <div className={classes.profile_menu_lower}>
                    <div className={classes.profile_menu_lower_buttons_left}>
                        <button className={classes.profile_menu_lower_buttons_left_btn}>
                            Создать статистику
                        </button>
                        <button className={classes.profile_menu_lower_buttons_left_btn}>
                            Моя статистика
                        </button>
                    </div>
                    <div className={classes.profile_menu_lower_buttons_right}>
                        <button className={classes.profile_menu_lower_buttons_right_btn}>
                            Настройки
                        </button>
                        <button className={classes.profile_menu_lower_buttons_right_btn}>
                            Выход
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
