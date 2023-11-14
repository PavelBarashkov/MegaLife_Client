import React from 'react'
import { BtnPrev } from './components/BtnPrev/BtnPrev'
import { Title } from '../../components/UI/Title/Title'
import { MainContainer } from './components/MianContainer/MainContainer'
import { FromContainer } from './components/FromContainer/FromContainer'
import { Form } from './components/From/Form'

export const AddNewUser = () => {
  return (
    <MainContainer>
        <BtnPrev/>
        <Title title={'Регистрация нового пользователя'}/>
        <FromContainer>
            <Form/>
        </FromContainer>
    </MainContainer>
  )
}
