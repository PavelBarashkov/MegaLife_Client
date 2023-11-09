import React from 'react'
import classes from './customContainer.module.css'
import { AsideMenu } from '../AsideMenu/AsideMenu'
import { HeaderMenu } from '../HeaderMenu/HeaderMenu'

interface CustomContainerProps {
    children: React.ReactNode
}

export const CustomContainer = ({children}: CustomContainerProps) => {
  return (
        <div className={classes.container}>
            <div className={classes.aside}>
                <AsideMenu/>
            </div>
            <div className={classes.main_container}>
                <div className={classes.header_navbar}>
                    <HeaderMenu/>
                </div>
                <section className={classes.main_section}>{children}</section>
            </div>
        </div>
        
  )
}
