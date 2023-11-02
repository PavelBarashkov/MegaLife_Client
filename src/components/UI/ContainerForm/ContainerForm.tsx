import React from 'react';
import classesContainerForm from './containerForm.module.css';

interface IContainerFormProps {
    children: React.ReactNode
}

export const ContainerFrom = ({children}: IContainerFormProps) => {
  return (
    <div className={classesContainerForm.container}>
        {children}
    </div>

  )
}
