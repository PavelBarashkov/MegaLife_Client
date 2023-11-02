import React from 'react';
import classesContainerInfo from './containerInfo.module.css';
import { IconError } from '../IconError/IconError';

interface IContainerInfoProps {
    children: React.ReactNode
    textError?: string
}

export const ContainerInfo = ({textError, children}: IContainerInfoProps) => {
  return (
    <div className={classesContainerInfo.container}>
        {textError ? (
            <span className={classesContainerInfo.error}><IconError/> {textError}</span>
        ):(
            <span className={classesContainerInfo.error}> {``}</span>
        )
        }
        {children}
    </div>

  )
}
