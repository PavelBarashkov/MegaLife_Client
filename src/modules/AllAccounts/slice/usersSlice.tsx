import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUsersAdmin } from '../API/getUsersAdmin';
import { deleteUserAdmin } from '../API/deleteUserAdmin';


interface GetUsersParams {
    token: string;
}

interface deleteUserParams {
    token: string;
    id: number
}

export const getUsers = createAsyncThunk(
    'users/ Get users',
    async (params: GetUsersParams, ) => {
        const { token } = params;
        try {
            const response = await getUsersAdmin(token);
            console.log(response)
            return response.data;
        } catch (error: any) {
            console.log(error.response.data.message)
            return error.response.data.message
        }

  
    }
)

export const deleteUser = createAsyncThunk(
    'users/ delete user',
    async (params: deleteUserParams, ) => {
        const { token, id } = params;
        try {
            const response = await deleteUserAdmin(token, id);
            console.log(response)
            return response.data;
        } catch (error: any) {
            console.log(error.response.data.message)
            return error.response.data.message
        }

  
    }
)

interface IUser {
    id: string,
        name: string,
        email: string,
        iat?: string,
        exp?: string,
        roleId?: number
}
export interface IUserState {
    users: IUser[], 
    loading: boolean,
    error: string
}

const initialState = {
    users: [],
    loading: false,
    error: ''
} as IUserState;


export const usersSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.pending, (state) => {
                state.loading = true;
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(deleteUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
    },
})

export const { 
    setUsers,
} = usersSlice.actions;

export default usersSlice.reducer;