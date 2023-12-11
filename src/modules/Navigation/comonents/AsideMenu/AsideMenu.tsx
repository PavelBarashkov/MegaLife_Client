import React from 'react'
import { MyNavLink } from '../Ui/MyNanLink/MyNavLink'
import user from '../../assests/user-check.png'
import star from '../../assests/star_6506601 1.png'
import history from '../../assests/history.png'
import logo from '../../assests/logo.png'
import classes from './asideMenu.module.css'
import { ADD_TOKENS } from '../../../../routes/consts'

export const AsideMenu = () => {
  return (
    <nav className={classes.aside}>
        <img className={classes.logo} src={logo} alt="MegaLife" />
        <div className={classes.title}>Меню администратора</div>
        <div className={classes.list_link}>
            <MyNavLink icon={user} href={'/accounts'} title='Учетные записи'/>
            <MyNavLink  icon={star} href={'!#'} title='Начисление/списание умников'/>
            <MyNavLink  icon={history } href={ADD_TOKENS} title='История начислений/списаний'/>
        </div>
        
    </nav>
  )
}
