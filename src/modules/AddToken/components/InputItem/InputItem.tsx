import React from "react";
import classes from "./inputItem.module.css";

interface IInputItemProps {
  label: string;
  children: React.ReactNode;
}

export const InputItem = ({ label, children }: IInputItemProps) => {
  return (
    <>
      <div className={classes.container}>
        <label className={classes.label}>{label}</label>
        {children}
      </div>
    </>
  );
};
