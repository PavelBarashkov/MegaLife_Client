import React from 'react'
import classes from './mainContainer.module.css'
interface IMainContainerProps {
    children: React.ReactNode
}

export const MainContainer = ({children}: IMainContainerProps) => {
  return (
    <section
         className={classes.container}
    >
        {children}
    </section>
  )
}
