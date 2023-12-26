import React from "react";
import classes from "./firstScreen.module.css";
import { MainImg } from "../UI/MainImg/MainImg";

interface IFirstScreenProps {
  children: React.ReactNode;
}

export const FirstScreen = ({ children }: IFirstScreenProps) => {
  return (
    <div className={classes.container}>
      <div className={classes.container_form}>
        <div className={classes.children_form}>{children}</div>
      </div>
      <div className={classes.container_decor}>
        <MainImg />
      </div>
    </div>
  );
};
