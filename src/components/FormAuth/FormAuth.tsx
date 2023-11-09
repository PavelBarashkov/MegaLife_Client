import React, { useEffect, useState } from 'react'
import { Form } from '../UI/Form/FormAuth'
import { useAppDispatch } from '../../redux/hooks/hooks';
import { Logo } from '../UI/Logo/Logo';
import { TitileForm } from '../UI/TitleForm/TitileForm';
import { MyInput } from '../UI/MyInput/myInput';
import { resetError } from '../utils/form-handlers/resetError';
import { updatatypePassword } from '../utils/form-handlers/updatatypePassword';
import { ContainerInfo } from '../UI/ContainerInfo/ContainerInfo';
import { ToPage } from '../UI/ToPage/ToPage';
import { MyButton } from '../UI/myButton/MyButton';
import { handlerFrom } from '../utils/form-handlers/handlerFrom';
import { IForm, IUserState } from '../../models/state/FormAuth';
import { useFetching } from '../../customHooks/useFetching';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { FIRST_LOGIN_ROUTE, ACCOUNTS_ROUTE, PASWORD_RESET_ROUTE } from '../../routes/consts';
import { setUser } from '../../redux/slices/userSlice';
import { useSelector } from 'react-redux';
import { InputWithBtn } from '../InputWithBtnBloor/InputWithBtn';
import { login } from '../../API/UserAPI/userAPI';

interface Iuser {
    isAuth: boolean
    id: string,
    name: string,
    email: string,
    password: string,
    registrationDate: string,
    first_entry: boolean,
    iat: string,
    exp: string,
    roleId: number | undefined
}

export const FormAuth = () => {
    const navigat = useNavigate()
    const dispatch = useAppDispatch();
    const { user } = useSelector((state: IUserState) => state.user);
    const [form, setForm] = useState<IForm>({
        login: {
            value: '',
            valid:  null,
            type: 'text'

        },
        password: {
            value: '',
            valid:  null,
            type: 'password'

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
        } else {
            setForm(prevForm => ({
                ...prevForm,
                [name]: {...prevForm, value: value},
            }));
        }
    }

    const [fetchUser, isUserInfoLoading, userInfoError] = useFetching(async (email: string, password: string)  => {
            const response = await login(email, password)
            .then(data => {
                const test: Iuser = jwtDecode(data.data?.data?.token)
                console.log(test)
                if(test?.first_entry) {
                    navigat(FIRST_LOGIN_ROUTE)
                } 
                else {
                    navigat(ACCOUNTS_ROUTE)
                }
                dispatch(setUser(jwtDecode(data.data?.data?.token)))
            })
            .catch(data => {
                form.error = data.response.data.message
            })
    })

  return (
        <Form>
            <Logo/>
            <TitileForm> Авторизация в MegaLife </TitileForm>
            <MyInput 
                name='login'
                placeholderTitle={'Логин'}
                valid={form.login.valid}
                valueInput={form.login.value}
                value={form.login.value}
                onFocus={() => resetError('auth', form, setForm)} 
                onChange={handlerInput}
            />
            <InputWithBtn 
                type={form.password.type}
                type_input='oneIcon'
                handlerBtn={() => updatatypePassword('password', form.password.type, setForm)}
            >
                <MyInput 
                    name='password'
                    type={form.password.type}
                    placeholderTitle={'Пароль'}
                    valid={form.password.valid}
                    valueInput={form.password.value}
                    value={form.password.value}
                    onChange={handlerInput}
                    onFocus={() => resetError('auth', form, setForm)}
            />
            </InputWithBtn>
            <ContainerInfo textError={form.error}> 
                <ToPage toPage={PASWORD_RESET_ROUTE}>
                    Забыли пароль?
                </ToPage>
            </ContainerInfo>
            <MyButton 
                style={{marginTop: '10px'}}
                type="submit" 
                onClick={(e:  React.MouseEvent<HTMLButtonElement>) => {
                    e.preventDefault();
                    handlerFrom(form, setForm);
                    if (form.login.valid && form.password.valid) {
                        fetchUser(form.login.value, form.password.value)
                    }}}
                >
                    Войти
            </MyButton >
            <p  className="form-info">Нажимая кнопку, я соглашаюсь с условиями<br></br> <a href='!#' className='convention'>Пользовательского соглашения</a> </p>
    </Form>
  )
}
