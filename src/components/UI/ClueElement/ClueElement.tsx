import React, { useState } from 'react'
import { IconQuestion } from '../iconQuestion/IconQuestion'
import classesClueElemen from './clueElement.module.css'

export const ClueElement = ({valid, ...props}: any) => {

    const [isShown, setIsShown] = useState(false);

  return (
    <>
        <IconQuestion
            {...props}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            color={valid === true || valid === null ? 'rgba(33, 37, 41, 1)' : 'rgba(255, 78, 100, 1)'}
        />
        {isShown && (
            <div className={classesClueElemen.clue}>
               <p className={classesClueElemen.first_p}>Пароль должен содержать минимум 6 символов</p>
                <p>Пароль должен:<br></br>
                — Состоять как минимум из 6 символов<br></br>
                — Содержать допутимые символы:<br></br>A-Z, a-z, 0-9, ! , # ,$ ,%, &, _ , -
            </p>
            </div>
        )}
    </>
    
  )
}
