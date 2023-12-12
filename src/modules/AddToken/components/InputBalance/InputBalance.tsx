import React from "react";
import classes from "./inputBalance.module.css";
import { useAppDispatch } from "../../../../redux/hooks/hooks";
import { setBalance } from "../../slice/studentSlice";

export const InputBalance = () => {
  const dispatch = useAppDispatch();

  return (
    <input
      onChange={(e: any) => dispatch(setBalance(e.target.value))}
      className={classes.input}
      type="number"
      placeholder="Кол-во умников"
    />
  );
};
