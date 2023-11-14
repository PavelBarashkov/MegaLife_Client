import React from 'react'
import img_prev from '../../assets/Icon.png'
import { useNavigate } from 'react-router-dom'
import classes from './btnPrev.module.css'

export const BtnPrev = () => {
    const navigat = useNavigate();

    const handleBtn = () => {   
        navigat(-1)
    }
  return (
    <button 
        onClick={() => handleBtn()}
        className={classes.btn}
    >
        <img src={img_prev} alt="" />
        <span>Назад</span>
    </button>
  )
}
