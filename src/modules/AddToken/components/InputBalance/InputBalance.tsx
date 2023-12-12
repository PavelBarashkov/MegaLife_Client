import React from "react";
import classes from "./inputBalance.module.css";

export const InputBalance = () => {
  return (
    <input className={classes.input} type="text" placeholder="Кол-во умников" />
  );
};
