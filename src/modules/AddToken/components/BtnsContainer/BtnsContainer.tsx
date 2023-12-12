import React from 'react'
import { SubtractBtn } from '../SubtractBtn/SubtractBtn'
import { Btn } from '../../../../components/UI/Btn/Btn'
import classes from './btnsContainer.module.css'

export const BtnsContainer = () => {
  return (
    <div className={classes.container}>
        <Btn>Начислить</Btn>
        <SubtractBtn/>
    </div>
  )
}
