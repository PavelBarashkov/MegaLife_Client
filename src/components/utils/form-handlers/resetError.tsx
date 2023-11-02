import { IForm } from "../../../models/state/FormAuth";

export function resetError (title: string, form: any, setState: any) {
    if (title === 'auth') {
        setState((prevForm: any) => ({
            ...prevForm,
            password: {
                ...prevForm.password,
                valid: null,
            },
            login: {
                ...prevForm.login,
                valid: null
            }
        }));
        form.error = '';
    }
    if (title === 'entryFirst') {
        setState((prevForm: any) => ({
            ...prevForm,
            password: {
                ...prevForm.password,
                valid: null,
                error: ''
            },
            repeat_password: {
                ...prevForm.repeat_password,
                valid: null,
                error: ''
            }
        }));
        form.error = '';
    }
    
}
