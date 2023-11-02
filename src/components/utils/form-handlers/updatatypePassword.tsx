export function updatatypePassword (name: string, type: string, setState: any) {
    if (name === 'password') {
        if(type === 'text') {
            setState((prevForm: any) => ({...prevForm, password: {...prevForm.password, type: 'password'}}))
            return;
        } 
        if(type === 'password') {
            setState((prevForm: any) => ({...prevForm, password: {...prevForm.password, type: 'text'}}))
            return;
        } 
    }

    if (name === 'repeat_password') {
        if(type === 'text') {
            setState((prevForm: any) => ({...prevForm, repeat_password: {...prevForm.repeat_password, type: 'password'}}))
            return;
        } 
        if(type === 'password') {
            setState((prevForm: any) => ({...prevForm, repeat_password: {...prevForm.repeat_password, type: 'text'}}))
            return;
        } 
    }
   
}