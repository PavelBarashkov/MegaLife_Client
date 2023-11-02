import React from 'react';
import classesFormAuth from './formAuth.module.css';

interface IFormAuthProps {
    children: React.ReactNode
}

export const Form= ({children}: IFormAuthProps) => {
  return (
    <form className={classesFormAuth.form}>
        {children}
    </form>

  )
}
