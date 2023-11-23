import React, { useState } from 'react'
import classes from './form.module.css'
import { CustomDropdown } from '../CustomDropdown/CustomDropdown'
import { CustomInput } from '../CustomInput/CustomInput'
import { Btn } from '../../../../components/UI/Btn/Btn'

interface IForm {
    form: {
        role: {
            id: number | null,
            label: string
        },
        name: string,
        email: string,
        phone: string,
        birthday: string
    },
    handleDropdown: (e:any) => void
    handlerInput: (e:any) => void
}

export const Form = ({form, handleDropdown, handlerInput}: IForm) => {

    return (
        <>
        <form className={classes.form}>
            <CustomDropdown 
                state={form.role}
                handleDropdown={handleDropdown}
            />
            <div className={classes.inputs}>
                <CustomInput
                    label={'ФИО*'}
                    name={'name'}
                    placeholder={'ФИО'}
                    value={form.name}
                    handlerInput={handlerInput}
                />
                <CustomInput
                    label={'Электронная почта*'}
                    name={'email'}
                    placeholder={'Электронная почта'}
                    value={form.email}
                    handlerInput={handlerInput}
                />
                <CustomInput
                    label={'Телефон'}
                    name={'phone'}
                    placeholder={'Телефон'}
                    value={form.phone}
                    handlerInput={handlerInput}
                />
                <CustomInput
                    label={'Дата рождения*'}
                    name={'birthday'}
                    placeholder={'чч.мм.гггг'}
                    value={form.birthday}
                    handlerInput={handlerInput}
                />
            </div>
        </form>

    </>
    )
}
