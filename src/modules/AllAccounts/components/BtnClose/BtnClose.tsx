import React from 'react'
import classes from "./btnClose.module.css"
import { useNavigate } from 'react-router-dom'
import { LOGIN_ROUTE } from '../../../../routes/consts';
import { useAppDispatch } from '../../../../redux/hooks/hooks';
import { unlogin } from '../../../../redux/slices/userSlice';

export const BtnClose = ({click}:any) => {

  return (
    <button 
        onClick={click}
        className={classes.btn}
    >
        Нет
    </button>
  )
}
