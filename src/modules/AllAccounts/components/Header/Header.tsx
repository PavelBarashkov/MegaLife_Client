import React from 'react'
import { Title } from '../../../../components/UI/Title/Title'
import { Btn } from '../../../../components/UI/Btn/Btn'
import plus from '../../assets/plus-circle.png'
import classes from './headet.module.css'


export const Header = () => {
  return (
    <div className={classes.container}>
        <Title title={'Учетне записи'}/>
        <div className={classes.btn_and_search}>
            <div>
                <Btn icon={plus}>Новая учетная запись</Btn>
            </div>
            <input type="text" placeholder='тут будет поиск'/>
        </div>
    </div>

  )
}
