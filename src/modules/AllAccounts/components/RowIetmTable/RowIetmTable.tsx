import React from 'react'
import classes from './rowIetmTable.module.css'
import { Dropdown } from 'react-bootstrap'
import btn_img from '../../assets/Vector (1).png'
import './dropdown.css'
export const RowIetmTable = ({user, handlModal}: any) => {
  return (
    <>
        {user && (
            <tr className={classes.body}>
                <td className={classes.body_text}>{user?.name}</td>
                <td className={classes.body_text}>{user?.birthday}</td>
                <td className={classes.body_text}>{user?.email}</td>
                <td className={classes.body_text}>{user?.phone}</td>
                <td className={classes.body_text}>{user?.role?.name}</td>
                <td>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            <img src={btn_img} alt="Опции" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => handlModal(user)} href="#/action-1">Удалить</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </td>
        </tr>
        )}
    </>
  )
}
