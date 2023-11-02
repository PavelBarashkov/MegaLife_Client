import React, { useEffect, useState } from 'react'
import { Form } from '../UI/Form/FormAuth'
import { useAppDispatch } from '../../redux/hooks/hooks';
import { Logo } from '../UI/Logo/Logo';
import { TitileForm } from '../UI/TitleForm/TitileForm';
import { MyInput } from '../UI/MyInput/myInput';
import { resetError } from '../utils/form-handlers/resetError';
import { InputWithBtn} from '../InputWithBtnBloor/InputWithBtn';
import { updatatypePassword } from '../utils/form-handlers/updatatypePassword';
import { ContainerInfo } from '../UI/ContainerInfo/ContainerInfo';
import { ToPage } from '../UI/ToPage/ToPage';
import { MyButton } from '../UI/myButton/MyButton';
import { authUser, isLoginValid } from '../../redux/slices/formSlice';
import { IForm, IUserState, IValueForm } from '../../models/state/FormAuth';
import { useFetching } from '../../customHooks/useFetching';
import { Service } from '../../API/ServiceAPI/Service';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { FIRST_LOGIN_ROUTE, LOGIN_ROUTE } from '../../routes/consts';
import { setUser } from '../../redux/slices/userSlice';
import { useSelector } from 'react-redux';
import { IFormFirstEntry } from '../../models/state/formFirstEntry';
import { InputNewPassword } from '../InputNewPassword/InputNewPassword';
import { handlerFromEntryFirst } from '../utils/form-handlers/hadlerFromEntryFirst';



export const FormNewPassword = () => {
    const navigat = useNavigate()
    const dispatch = useAppDispatch();
    const [isPasswordChange, setIsPasswordChange] = useState<boolean>(false);
    const { user } = useSelector((state: IUserState) => state.user);
    const [form, setForm] = useState<IFormFirstEntry>({
        password: {
            value: '',
            valid: null,
            type: 'password',
            error: ''
        },
        repeat_password: {
            value: '',
            valid: null,
            type: 'password',
            error: ''
        },
        error: ''
    })

    function handlerInput({ target }: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = target;
        if (name === 'password') {
            setForm(prevForm => ({
                ...prevForm,
                [name]: {
                    ...prevForm[name],
                    value: value,
                },
            }));
        } else if (name === 'repeat_password') {
            setForm(prevForm => ({
                ...prevForm,
                [name]: {
                    ...prevForm[name],
                    value: value,
                },
            }));
        } else {
            setForm(prevForm => ({
                ...prevForm,
                [name]: {...prevForm, value: value},
            }));
        }
    }

    const [fetchUser, isUserInfoLoading, userInfoError] = useFetching(async (id: number, password: string)  => {
            const response = await Service.firstEntry(id, password)
            .then(data => {
                dispatch(setUser(data));
                setIsPasswordChange(true);
            })
            .catch(data => {
                form.error = data.response.data.message
            })
    })

  return (
    <>
        {isPasswordChange ? (
            <Form>
            <Logo/>
            <TitileForm> Пароль успешно восстановлен! </TitileForm>
            <MyButton onClick={() => navigat(LOGIN_ROUTE)}>Войти</MyButton>
            </Form>
        ):(
            <Form>
            <Logo/>
            <TitileForm> Восстановление пароля </TitileForm>
            <InputNewPassword/>
            <InputWithBtn 
                valid={form.password.valid}
                type={form.password.type}
                type_input='twoIcons'
                handlerBtn={() => updatatypePassword('password', form.password.type, setForm)}
            >
                <MyInput
                    name='password'
                    type={form.password.type}
                    placeholderTitle={'Введите новый пароль'}
                    valid={form.password.valid}
                    valueInput={form.password.value}
                    value={form.password.value}
                    onChange={handlerInput}
                    onFocus={() => resetError('entryFirst', form, setForm)}
                />
            </InputWithBtn>
            <ContainerInfo textError={form.password.error}> 
                </ContainerInfo>
            <InputWithBtn 
                type={form.repeat_password.type}
                type_input='oneIcon'
                handlerBtn={() => updatatypePassword('repeat_password', form.repeat_password.type, setForm)}

            >
                <MyInput
                    name='repeat_password'
                    type={form.repeat_password.type}
                    placeholderTitle={'Повторите новый пароль'}
                    valid={form.repeat_password.valid}
                    valueInput={form.repeat_password.value}
                    value={form.repeat_password.value}
                    onChange={handlerInput}
                    onFocus={() => resetError('entryFirst', form, setForm)}
                />
            </InputWithBtn>
            {(form.password.valid === false || form.repeat_password.valid === false) && (
                <ContainerInfo textError={form.error}> 
                    <ToPage toPage='!#'>
                        Обратиться в техподдержку
                    </ToPage>
                </ContainerInfo>
            )}
            
            <MyButton 
                style={{marginTop: '10px'}}
                type="submit" 
                onClick={(e:  React.MouseEvent<HTMLButtonElement>) => {
                    e.preventDefault();
                    handlerFromEntryFirst(form, setForm)
                    if (form.password.valid && form.repeat_password.valid) {
                        fetchUser(user.id, form.password.value)
                    }
                }
                }
                >
                    Войти
            </MyButton>
            <p  className="form-text-recovery">Я вспомнил пароль. <span onClick={() => navigat(LOGIN_ROUTE)} className='convention-recovery'>Вернуться</span> </p>
             </Form>
        )}
    </>   
  )
}
