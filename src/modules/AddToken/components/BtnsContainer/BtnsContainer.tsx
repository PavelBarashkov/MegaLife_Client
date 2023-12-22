import React from "react";
import { SubtractBtn } from "../SubtractBtn/SubtractBtn";
import { Btn } from "../../../../components/UI/Btn/Btn";
import classes from "./btnsContainer.module.css";
import { useAppDispatch } from "../../../../redux/hooks/hooks";
import { AddBalance } from "../../slice/studentSlice";
import { useSelector } from "react-redux";

export const BtnsContainer = () => {
  const dispatch = useAppDispatch();
  const { selectedUsers, balance } = useSelector(
    (state: any) => state.students
  );
  const handlerAddBtn = (e: any) => {
    e.preventDefault();
    const params = {
      id: selectedUsers,
      balance: balance,
      token: localStorage.getItem("token"),
    };
    dispatch(AddBalance(params));
  };

  return (
    <div className={classes.container}>
      <Btn onClick={handlerAddBtn}>Начислить</Btn>
      <SubtractBtn />
    </div>
  );
};
