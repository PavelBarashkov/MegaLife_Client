import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addBalance } from "../API/addBalance";

export const AddBalance = createAsyncThunk(
  "apiStudentSlice/ add balance",
  async (params: any) => {
    const { id, balance, token } = params;
    const response = await addBalance([...id], balance, token);
    return response.data;
  }
);

export interface IApiStudentSliceState {
  status: null;
  loading: boolean;
  error: string | null;
}

const initialState = {
  loading: false,
  error: '',
} as IApiStudentSliceState;

export const apiStudentSlice = createSlice({
  name: "apiStudentSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(AddBalance.pending, (state) => {
        state.loading = true;
      })
      .addCase(AddBalance.fulfilled, (state, action) => {
        state.status = action.payload.status
        state.loading = false;
      })
      .addCase(AddBalance.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "An error occurred";
      });
  },
});

export const {} = apiStudentSlice.actions;

export default apiStudentSlice.reducer;
