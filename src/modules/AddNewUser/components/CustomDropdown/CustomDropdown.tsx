import React, { useEffect } from 'react'
import classes from './customDropdown.module.css'
import { Dropdown } from 'react-bootstrap'
import img from '../../assets/btn_select.png'
import { useSelector } from 'react-redux'
import { getRoles } from '../../slices/RolesSlice'
import { useAppDispatch } from '../../../../redux/hooks/hooks'

export const CustomDropdown = ({state, handleDropdown}: any) => {
    const dispatch = useAppDispatch();
    const {roles, error} = useSelector((state: any) => state.roles)

    useEffect(() => {
        dispatch(getRoles())
    }, [])

    return (
        <div className={classes.container}>
            <label className={classes.label} htmlFor="">Выбор роли</label>
                <Dropdown  className={classes.dropdown}>
                    <Dropdown.Toggle className={classes.btn} id="dropdown-basic">
                        <span>{state?.label}</span>
                        <img src={img} alt="" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu className={classes.menu}>
                        {error ? (
                            <div>{error}</div>
                        ) : (
                            <>
                                {roles && roles.map((role: any) => (
                                    <Dropdown.Item 
                                        className={classes.item}
                                        onClick={() => handleDropdown(role)}
                                    > 
                                        {role?.name} 
                                    </Dropdown.Item>

                                ))}
                            </>
                        )}
                    </Dropdown.Menu>
            </Dropdown>
        </div>

  )
}
