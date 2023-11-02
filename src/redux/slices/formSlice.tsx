import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Service } from '../../API/ServiceAPI/Service';
import { login } from '../../API/UserAPI/userAPI';

export interface IFromState {
    form_authorization: {
        login: {
            value: string,
            valid: boolean | null,
            type: string
        },
        password: {
            value: string,
            valid: boolean | null,
            type: string
        },
        error: {
            login: string,
            password: string,
            general_error?: string,
        },
    },
    form_first_entry: {
        password: {
            value: string,
            valid: boolean | null,
            type: string
        },
        password_repeat: {
            value: string,
            valid: boolean | null,
            type: string
        },
        error: {
            password: string,
            password_repeat: string,
            general_error?: string,
        },
    },

    loading: boolean
}

interface AuthorizationParams {
    email: string;
    password: string;
}


const initialState = {
    form_authorization: {
        login: {
            value: '',
            valid: null,
            type: 'text'
        },
        password: {
            value: '',
            valid: null,
            type: 'password'
        },
        error: {
            login: '',
            password: '',
            general_error: '',
        },
    },
    form_first_entry: {
        password: {
            value: '',
            valid: null,
            type: 'password'
        },
        password_repeat: {
            value: '',
            valid: null,
            type: 'password'
        },
        error: {
            password: '',
            password_repeat: '',
            general_error: '',
        },
    },
    loading: false
} as IFromState;

function isValidLogin(str: string): boolean {
    return /\w@[\w\d][-_\w\d]+\.\w/.test(str);
}

function isValidPassword(str: string): boolean {
    if (/\s/.test(str)) {
        return false;
      }
      return /^(?=.*[A-Za-z0-9!#$%&_-]).{6,}$/.test(str);
}


export const authUser = createAsyncThunk(
    'Authorization/AuthorizationUser',
    async (params: AuthorizationParams, ) => {
        const { email, password } = params;
        try {
            const response = await login(email, password);
            console.log(response)
            return response;
        } catch (error: any) {
            console.log(error.response.data.message)
            return error.response.data.message
        }

  
    }
)


export const formSlice = createSlice({
    name: 'Form',
    initialState,
    reducers: {
        updatLoginValue: (state, action) => {
            state.form_authorization.login.value= action.payload;
        },
        updatpasswordValue: (state, action) => {
            state.form_authorization.password.value = action.payload;
        },
        updatpasswordValueFitst: (state, action) => {
            state.form_first_entry.password.value = action.payload;
        },
        updatpasswordValueFitstRepeat: (state, action) => {
            state.form_first_entry.password_repeat.value = action.payload;
        },
        updatatypePasswordFitst: (state, action) => {
            if(action.payload === 'text') {
                state.form_first_entry.password.type = 'password';
                return;
            } 
            if(action.payload === 'password') {
                state.form_first_entry.password.type = 'text';
                return;
            } 
        },
        updatatypePasswordFitstRepeat: (state, action) => {
            if(action.payload === 'text') {
                state.form_first_entry.password_repeat.type = 'password';
                return;
            } 
            if(action.payload === 'password') {
                state.form_first_entry.password_repeat.type = 'text';
                return;
            } 
        },
        updatatypePassword: (state, action) => {
            if(action.payload === 'text') {
                state.form_authorization.password.type = 'password';
                return;
            } 
            if(action.payload === 'password') {
                state.form_authorization.password.type = 'text';
                return;
            } 
        },
        isLoginValid: (state) => {
        },
        isPasswordValid: (state, action) => {
        },   
        handlerFrom: (state) => {
            if(state.form_authorization.login.value === '' && state.form_authorization.password.value === '') {
                state.form_authorization.error.general_error = 'Заполните все поля';
                state.form_authorization.login.valid = false;
                state.form_authorization.password.valid = false;
                return;
            }
            if(state.form_authorization.login.value === '') {
                state.form_authorization.error.general_error = 'Заполните логин';
                state.form_authorization.login.valid = false;
                return;
            }
            if(state.form_authorization.password.value === '') {
                state.form_authorization.error.general_error = 'Заполните пароль';
                state.form_authorization.password.valid = false;
                return;
            }
            state.form_authorization.login.valid = isValidLogin(state.form_authorization.login.value);
            state.form_authorization.password.valid = isValidPassword(state.form_authorization.password.value);

            if(!state.form_authorization.login.valid || !state.form_authorization.password.valid) {
                state.form_authorization.error.general_error = 'Некорректный логин или пароль';
                return;
            }
            return;
        },
        resetForm: (state) => {
            state.form_authorization.login.value = '';
            state.form_authorization.login.valid = null;
            state.form_authorization.password.value = '';
            state.form_authorization.password.valid = null;
        },
        resetError: (state) => {
            state.form_authorization.error.general_error = '';
            state.form_authorization.login.valid = null;
            state.form_authorization.password.valid = null;
        },
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(authUser.pending, (state) => {
                state.loading = true;
                state.form_authorization.error.general_error = '';
            })
            .addCase(authUser.fulfilled, (state, action) => {
                state.loading = false;
                const type = typeof action.payload;
                if (type === 'string') {
                    state.form_authorization.error.general_error = action.payload;
                    return;
                }
                state.form_authorization.error.general_error = '';
            })
            .addCase(authUser.rejected, (state, action) => {
                state.loading = false;
                state.form_authorization.error.general_error = action.payload as string;
            })
    }
})

export const { 
    updatLoginValue, 
    updatpasswordValue, 
    isLoginValid, 
    isPasswordValid, 
    handlerFrom, 
    resetError, 
    updatatypePassword,
    resetForm ,
    updatpasswordValueFitst,
    updatpasswordValueFitstRepeat,
    updatatypePasswordFitst,
    updatatypePasswordFitstRepeat
} = formSlice.actions;
export default formSlice.reducer;