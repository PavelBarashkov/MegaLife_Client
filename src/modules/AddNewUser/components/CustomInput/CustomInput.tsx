import React from 'react'
import classes from './customInput.module.css'

interface ICustomInputProps {
    label: string,
    name: string,
    placeholder: string,
    value: string,
    handlerInput: (e: any) => void
}

export const CustomInput = ({label, name, placeholder, value, handlerInput}: ICustomInputProps) => {
    return (
        <div className={classes.container}>
            <label 
                className={classes.label}
                htmlFor={name}
            >
                {label}
            </label>
            <input 
                className={classes.input}
                id={name}
                name={name}
                type="text" 
                placeholder={placeholder}
                value={value}
                onChange={handlerInput}
            />
        </div>
    )
}
