// btn.jsx
import React from 'react';
import classes from './_btn.module.scss';

const Btn = ({ children }) => {
  return (
    <button className={classes.btn}>
      {children}
    </button>
  );
}

export default Btn;
