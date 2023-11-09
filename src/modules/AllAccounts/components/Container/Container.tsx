import React from 'react'
import classes from './container.module.css'

interface IContainerProps {
    children: React.ReactNode
}

export const Container = ({children}: IContainerProps) => {
  return (
    <div className={classes.container}>{children}</div>
  )
}
