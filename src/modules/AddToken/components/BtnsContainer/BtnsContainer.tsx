import React from "react";
import { SubtractBtn } from "../SubtractBtn/SubtractBtn";
import { Btn } from "../../../../components/UI/Btn/Btn";
import classes from "./btnsContainer.module.css";
import { useAppDispatch } from "../../../../redux/hooks/hooks";
import { AddBalance, Withdraw } from "../../slice/apiStudentSlice";
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

  const handlerwithdrawBtn = (e: any) => {
    e.preventDefault();
    const params = {
      id: selectedUsers,
      balance: balance,
      token: localStorage.getItem("token"),
    };
    dispatch(Withdraw(params));
  };

  return (
    <div className={classes.container}>
      <Btn onClick={handlerAddBtn}>Начислить</Btn>
      <SubtractBtn onClick={handlerwithdrawBtn} />
    </div>
  );
};
