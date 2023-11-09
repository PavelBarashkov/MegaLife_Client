import React from 'react'
import { CustomContainer } from './comonents/CustomContainer/CustomContainer'

interface NavigationProps {
    children: React.ReactNode
}

export const Navigation = ({children}: NavigationProps) => {
  return (
    <>
        <CustomContainer>{children}</CustomContainer>
    </>
  )
}
