import React from "react";
import classes from "./settings.module.css";

const Settings = () => {
    return (
        <div className={classes.settings_main}>
            <h2 className={classes.settings_h}>Настройки</h2>
            <input
                className={classes.settings_input}
                placeholder="Жак Фреско"
            />
            <input
                className={classes.settings_input}
                placeholder="theriddle@gmail.com"
            />
            <input
                className={classes.settings_input}
                placeholder="@looool"
            />
            <button className={classes.settings_button}>Закрыть</button>
        </div>
    );
};

export default Settings;
