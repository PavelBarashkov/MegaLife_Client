import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Service } from '../../API/ServiceAPI/Service';
import { login } from '../../API/UserAPI/userAPI';
import jwtDecode from 'jwt-decode';

export interface IUserState {
    user: {
        isAuth: boolean,
        id: string,
        name: string,
        email: string,
        password: string,
        registrationDate: string,
        first_entry: boolean
        iat: string,
        exp: string,
        roleId: number | undefined
    }
}

interface AuthorizationParams {
    email: string;
    password: string;
}


const initialState = {
    user: {
        isAuth: false,
        id: '',
        name: '',
        email: '',
        password: '',
        registrationDate: '',
        first_entry: false,
        iat: '',
        exp: '',
        roleId: undefined
    }
} as IUserState;

export const userSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
            state.user.isAuth = true
        },
        userAuth: (state, action) => {
            state.user = action.payload;
            state.user.isAuth = true;
        },
        isAuth: (state) => {
            state.user.isAuth = true;
        },
        unlogin: (state) => {
            state.user = {
                isAuth: false,
                id: '',
                name: '',
                email: '',
                password: '',
                registrationDate: '',
                first_entry: false,
                iat: '',
                exp: '',
                roleId: undefined
            }
        }

    },
})

export const { 
    userAuth,
    isAuth,
    setUser,
    unlogin
} = userSlice.actions;
export default userSlice.reducer;