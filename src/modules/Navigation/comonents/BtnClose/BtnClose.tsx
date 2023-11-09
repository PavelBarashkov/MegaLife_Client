import React from 'react'
import classes from "./btnClose.module.css"
import { useNavigate } from 'react-router-dom'
import { LOGIN_ROUTE } from '../../../../routes/consts';
import { useAppDispatch } from '../../../../redux/hooks/hooks';
import { unlogin } from '../../../../redux/slices/userSlice';

export const BtnClose = () => {
    const navigat = useNavigate();
    const dispatch = useAppDispatch();

    const unLogin = () => {
        localStorage.removeItem('token');
        dispatch(unlogin());
        navigat(LOGIN_ROUTE);
        
    }

  return (
    <button 
        className={classes.btn}
        onClick={() => unLogin()}
    >
        Выйти
    </button>
  )
}
