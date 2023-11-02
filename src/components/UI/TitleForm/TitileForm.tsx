import React from 'react';
import classesTitileForm from './titileForm.module.css';

interface ITitileFormProps {
    children: React.ReactNode
}

export const TitileForm = ({children}: ITitileFormProps) => {
  return (
    <h3 className={classesTitileForm.title}>
        {children}
    </h3>

  )
}
