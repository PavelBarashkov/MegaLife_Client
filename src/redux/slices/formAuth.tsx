import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Service } from '../../API/ServiceAPI/Service';
import { login } from '../../API/UserAPI/userAPI';

export interface IFromState {
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
    error: string,
    loading: boolean
}

interface AuthorizationParams {
    email: string;
    password: string;
}


const initialState = {
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
    error: '',
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
    'Authorization/FormAuth',
    async (params: AuthorizationParams) => {
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


export const formAuthSlice = createSlice({
    name: 'form Auth',
    initialState,
    reducers: {
        updatLoginValue: (state, action) => {
            state.login.value= action.payload;
        },
        updatpasswordValue: (state, action) => {
            state.password.value = action.payload;
        },
        updatatypePassword: (state, action) => {
            if(action.payload === 'text') {
                state.password.type = 'password';
                return;
            } 
            if(action.payload === 'password') {
                state.password.type = 'text';
                return;
            } 
        },
        isValidForm: (state) => {
            state.login.valid = isValidLogin(state.login.value);
            state.password.valid = isValidPassword(state.password.value);
        },
        isLoginValid: (state) => {
        },
        isPasswordValid: (state, action) => {
        },   
        handlerFrom: (state) => {
            
            if(state.login.value === '' && state.password.value === '') {
                state.error = 'Заполните все поля';
                state.login.valid = false;
                state.password.valid = false;
                return;
            }
            if(state.login.value === '') {
                state.error = 'Заполните логин';
                state.login.valid = false;
                return;
            }
            if(state.password.value === '') {
                state.error = 'Заполните пароль';
                state.password.valid = false;
                return;
            }
            if(state.login.value === '') {
                state.error = 'Заполните логин';
                state.login.valid = false;
                return;
            }
            if(state.password.value === '') {
                state.error = 'Заполните пароль';
                state.password.valid = false;
                return;
            }
            state.login.valid = isValidLogin(state.login.value);
            state.password.valid = isValidPassword(state.password.value);

            if(!state.login.valid) {
                state.error = 'Некорректный логин';
                return;
            }

            if(!state.password.valid) {
                state.error = 'Некорректный пароль';
                return;
            }
            console.log('state', state.login.valid)

            return
             
        },
        resetForm: (state) => {
            state.login.value = '';
            state.login.valid = null;
            state.password.value = '';
            state.password.valid = null;
        },
        resetError: (state) => {
            state.error = '';
            state.login.valid = null;
            state.password.valid = null;
        },
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(authUser.pending, (state) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(authUser.fulfilled, (state, action) => {
                state.loading = false;
                const type = typeof action.payload;
                if (type === 'string') {
                    state.error = action.payload;
                    return;
                }
                state.error = '';
            })
            .addCase(authUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
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
    isValidForm
} = formAuthSlice.actions;
export default formAuthSlice.reducer;