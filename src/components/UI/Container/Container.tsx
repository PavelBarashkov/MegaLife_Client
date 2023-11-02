import React from 'react';
import classesContainer from './container.module.css';

interface IContainerProps {
    children: React.ReactNode
}

export const Container = ({children}: IContainerProps) => {
  return (
    <div className={classesContainer.container}>
        {children}
    </div>

  )
}
