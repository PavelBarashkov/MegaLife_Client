import React, { useEffect, useState } from 'react'
import classes from './table.module.css';

import { ModalCustom } from '../ModalCustom/ModalCustom';
import { RowIetmTable } from '../RowIetmTable/RowIetmTable';
import { useAppDispatch } from '../../../../redux/hooks/hooks';
import { deleteUser, getUsers } from '../../slice/usersSlice';
import { useSelector } from 'react-redux';

export const Table = () => {
    const dispatch = useAppDispatch();
    const token = localStorage.getItem('token');
    const {users, loading, error} = useSelector((state: any) => state.users);
    const [show, setShow] = useState(false);
    const [user, setUser] = useState({id: null});
    const [isdelete, setIsDelete] = useState(false)

    const handleClose = () => setShow(false);

    const handleShow = (user: any) => {
        setShow(true);
        setUser(user);
    };
    
    const handleDelete = () => {
        if (token && user.id) {
            const params = {
                token: token,
                id: user?.id
            }
            dispatch(deleteUser(params))
        }
        setUser({id: null})
        setShow(false);
        setIsDelete(!isdelete)
    }

    useEffect(() => {
        if (token) {
            const params = {
                token: token
            }
            dispatch(getUsers(params));
        }
    }, [isdelete])


    return (
        <div className={classes.container}>
            {loading ? (
                <div>Загрузка</div>
            ) : (
                <>
                    {error ? (
                        <div>{error}</div>
                    ) : (
                        <>
                            <table className={classes.table}>
                                <thead className={classes.header}>
                                    <tr className={classes.tr}>
                                        <th className={classes.title}>ФИО</th>
                                        <th className={classes.title}>Дата рождения</th>
                                        <th className={classes.title}>Электронная почта</th>
                                        <th className={classes.title}>Телефон</th>
                                        <th className={classes.title}>Тип учетной записи</th>
                                        <th className={classes.title}></th>
                                    </tr>
                                </thead>
                                {users && users.map((user: any) => (
                                    <RowIetmTable key={user.id} user={user} handlModal={handleShow}/>
                                ))}
                            </table>
                            <ModalCustom
                                show={show}
                                handleClose={handleClose}
                                handleDelete={handleDelete}
                            />
                        </>
                    )}
                </>
            )}
            
        </div>
    )
}