import React, { useState } from 'react'
import classes from './form.module.css'
import { CustomDropdown } from '../CustomDropdown/CustomDropdown'

export const Form = () => {

    const [form, setForm] = useState({
        role: {
            id: null,
            label: 'Выбрать'
        }
    })

    const handleDropdown = (data: any) => {
        setForm(prevForm => ({...prevForm, 
            role: {
                id: data.id,
                label: data.name
            } 
        }))
    }

    return (
        
        <form className={classes.form}>
            <CustomDropdown 
                state={form.role}
                handleDropdown={handleDropdown}
            />
        </form>
    )
}
