import { IFormReset } from "../../FormPasswordReset/FormPasswordReset";
import { isValidLogin } from "./isValidLogin";

export function  handlerFromReset(form: IFormReset, setState: any) {
            
    if(form.login.value === '') {
        setState((prevForm: any) => ({...prevForm, error: 'Заполните поле'}))
        form.login.valid = false;
        return;
    }

    form.login.valid = isValidLogin(form.login.value)


    if(!form.login.valid) {
        setState((prevForm: any) => ({...prevForm, error: 'Некорректный логин'}))
        return;
    }
}