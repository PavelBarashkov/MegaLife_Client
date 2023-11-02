import React from 'react'
import { IconBlur } from './UI/iconBlur/IconBlur'
import { IconCloseBlur } from './UI/iconCloseBlur/IconCloseBlur'

interface IBtnBloorProps {
    type: string,
    className: string,
    style: {
        top: string
    },
    handlerBtn: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const BtnBloor = ({type, handlerBtn, className, style}: IBtnBloorProps) => {
  return (
    <button type='button' style={style} className={className} onClick={(e: any) => handlerBtn(e)}>
        {type === 'password' ? (
            <IconCloseBlur />
            ) : (
            <IconBlur/>
        ) 
    }
    </button>
  )
}
