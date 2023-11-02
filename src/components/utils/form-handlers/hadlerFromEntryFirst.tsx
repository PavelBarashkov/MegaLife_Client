import { IFormFirstEntry } from "../../../models/state/formFirstEntry";
import { isValidPassword } from "./isValidPassword";
import { isValidRepeatPassword } from './isValidRepeatPassword';

export function  handlerFromEntryFirst (form: IFormFirstEntry, setState: any) {
            
    if(form.password.value === '' && form.repeat_password.value === '') {
        setState((prevForm: any) => ({...prevForm, error: 'Заполните все поля'}))
        form.password.valid = false;
        form.repeat_password.valid = false;
        return;
    }
    if(form.password.value === '') {
        setState((prevForm: any) => ({...prevForm, error: 'Заполните все поля'}))
        form.password.valid = false;
        return;
    }
    if(form.repeat_password.value === '') {
        setState((prevForm: any) => ({...prevForm, error: 'Заполните все поля'}))
        form.repeat_password.valid = false;
        return;
    }
    if(form.password.value.length < 6) {
        setState((prevForm: any) => ({...prevForm, password:  {...prevForm.password, error: 'Короткий пароль'}}))
        return;
    }
    form.password.valid = isValidPassword(form.password.value);
    form.repeat_password.valid = isValidRepeatPassword(form.password.value, form.repeat_password.value);

    if(!form.password.valid) {
        setState((prevForm: any) => ({...prevForm, password:  {...prevForm.password, error: 'Некорректный пароль'}}))
        return;
    }


    if(!form.repeat_password.valid) {
        setState((prevForm: any) => ({...prevForm, error: 'Пароли не совподат'}))
        return;
    }
    return
}