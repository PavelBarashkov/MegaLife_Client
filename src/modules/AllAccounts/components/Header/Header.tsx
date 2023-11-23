import React from 'react'
import { Title } from '../../../../components/UI/Title/Title'
import { Btn } from '../../../../components/UI/Btn/Btn'
import plus from '../../assets/plus-circle.png'
import classes from './headet.module.css'
import { useNavigate } from 'react-router-dom'
import { ADD_NEW_USER_ROUTE } from '../../../../routes/consts'


export const Header = () => {
    const navigat = useNavigate();
    const handleBtn = () => {
        navigat(ADD_NEW_USER_ROUTE);
    }
    return (
        <div className={classes.container}>
            <Title title={'Учетные записи'}/>
            <div className={classes.btn_and_search}>
                <div>
                    <Btn onClick={handleBtn} icon={plus}>Новая учетная запись</Btn>
                </div>
                <input type="text" placeholder='тут будет поиск'/>
            </div>
        </div>

  )
}
