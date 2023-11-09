import React from 'react'
import classes from './title.module.css'

interface ITetleProps {
    title: string
}

export const Title = ({title}: ITetleProps) => {
  return (
    <div className={classes.title}>{title}</div>
  )
}
