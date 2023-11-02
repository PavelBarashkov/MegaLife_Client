import React from 'react';
import { useNavigate } from 'react-router-dom';
import classesInfo from './toPage.module.css';

interface IToPageProps {
    toPage: string
    children: React.ReactNode
}


export const ToPage = ({toPage, children}: IToPageProps) => {
    const navigat = useNavigate();

    const nextPage = (): void => {
        navigat(`${toPage}`);
    }
  return (
    <span 
        className={classesInfo.text}
        onClick={nextPage}
    >
        {children}
    </span>
  )
}