import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../API/getUsers";

export const getStudents = createAsyncThunk(
  "Students/ get students",
  async (token: string) => {
    const response = await getUsers(token);
    return response.data;
  }
);

export interface IStudent {
  id: number;
  name: string;
  email: string;
  phone?: string;
  birthday?: string;
  password: string;
  registrationDate: string;
  first_entry: boolean;
  createdAt: string;
  updatedAt: string;
  roleId: number;
  role: {
    name: string;
  };
}

export interface IStudentsState {
  students: IStudent[];
  loading: boolean;
  error: string;
}

const initialState = {
  students: [],
  loading: false,
  error: "",
} as IStudentsState;

export const studentsSlice = createSlice({
  name: "Students",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStudents.pending, (state) => {
        state.loading = true;
      })
      .addCase(getStudents.fulfilled, (state, action) => {
        state.loading = false;
        state.students = action.payload;
      })
      .addCase(getStudents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const {} = studentsSlice.actions;

export default studentsSlice.reducer;
