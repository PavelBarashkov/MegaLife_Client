import React from 'react'
import classes from './fromContainer.module.css'

interface IFormContainerProps {
    children: React.ReactNode
}

export const FromContainer = ({children}: IFormContainerProps) => {
  return (
    <div className={classes.container}>
        <h5 className={classes.title}>Сведения о пользователе</h5>
        {children}
    </div>
  )
}
