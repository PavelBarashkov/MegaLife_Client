import React from 'react'
import { MyInput } from '../UI/MyInput/myInput'
import { InputWithBtn} from '../InputWithBtnBloor/InputWithBtn'

export const InputNewPassword = () => {
  return (
    <InputWithBtn 
        type='password' 
        type_input=''
        handlerBtn={()=> console.log()}

    >
            <MyInput 
                placeholderTitle={'Новый пароль'}
                valueInput={'dsf'}
                valid={null} 
            />
    </InputWithBtn>

    
  )
}
