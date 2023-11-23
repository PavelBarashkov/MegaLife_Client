import React from 'react'
import classes from './containerForSend.module.css'

interface IContainerForSendProps {
    children: React.ReactNode
}

export const ContainerForSend = ({children}: IContainerForSendProps) => {
  return (
    <div className={classes.container} >
        <div className={classes.btns}>
            {children}
        </div>
    </div>
  )
}
