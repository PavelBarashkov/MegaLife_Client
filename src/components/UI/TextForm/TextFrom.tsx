import React from 'react'
import classesTextForm from './textForm.module.css'
export const TextFrom = () => {
  return (
    <div className={classesTextForm.container}>
        <p>Введите адрес электронной почты. </p>
        <p className={classesTextForm.p}>Мы отправим ссылку на восстановление пароля на указанный адрес</p>
    </div>
  )
}
