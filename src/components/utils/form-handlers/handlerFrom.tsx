import { IForm } from "../../../models/state/FormAuth";
import { isValidLogin } from "./isValidLogin";
import { isValidPassword } from "./isValidPassword";

export function  handlerFrom (form: IForm, setState: any) {
            
    if(form.login.value === '' && form.password.value === '') {
        setState((prevForm: any) => ({...prevForm, error: 'Заполните все поля'}))
        form.login.valid = false;
        form.password.valid = false;
        return;
    }
    if(form.login.value === '') {
        setState((prevForm: any) => ({...prevForm, error: 'Заполните логин'}))
        form.login.valid = false;
        return;
    }
    if(form.password.value === '') {
        setState((prevForm: any) => ({...prevForm, error: 'Заполните пароль'}))
        form.password.valid = false;
        return;
    }

    form.login.valid = isValidLogin(form.login.value)
    form.password.valid = isValidPassword(form.password.value)

    if(!form.login.valid) {
        setState((prevForm: any) => ({...prevForm, error: 'Некорректный логин'}))
        return;
    }
    
    if(form.password.value.length < 6) {
        setState((prevForm: any) => ({...prevForm, error:  'Короткий пароль'}))
        return;
    }

    if(!form.password.valid) {
        setState((prevForm: any) => ({...prevForm, error: 'Некорректный пароль'}))
        form.password.valid = false;
        return;
    }
    return
     
}