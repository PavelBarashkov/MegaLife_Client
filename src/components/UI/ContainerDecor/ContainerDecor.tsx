import React from 'react';
import classesContainerDecor from './containerDecor.module.css';

interface IContainerDecorProps {
    children: React.ReactNode
}

export const ContainerDecor = ({children}: IContainerDecorProps) => {
  return (
    <div className={classesContainerDecor.container}>
        {children}
    </div>

  )
}
