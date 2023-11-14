import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllRole } from '../API/getAllRole';

export const getRoles = createAsyncThunk(
    'Roles/ Get roles',
    async ( ) => {
        try {
            const response = await getAllRole();
            return response.data;
        } catch (error: any) {
            return error.response.data.message
        }

  
    }
)

interface IRole{
    id: number,
    name: string,
    createdAt: string,
    updatedAt: string
}
export interface IUserState {
    roles: IRole[], 
    loading: boolean,
    error: string
}

const initialState = {
    roles: [],
    loading: false,
    error: ''
} as IUserState;


export const rolesSlice = createSlice({
    name: 'Roles',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getRoles.pending, (state) => {
                state.loading = true;
            })
            .addCase(getRoles.fulfilled, (state, action) => {
                state.loading = false;
                state.roles = action.payload;
            })
            .addCase(getRoles.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
    },
})

export const { 
} = rolesSlice.actions;

export default rolesSlice.reducer;