import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addBalance } from "../API/addBalance";
import { withdrawBalance } from "../API/withdrawBalance";

export const AddBalance = createAsyncThunk(
  "apiStudentSlice/ add balance",
  async (params: any) => {
    const { id, balance, token } = params;
    const response = await addBalance([...id], balance, token);
    return response.data;
  }
);

export const Withdraw = createAsyncThunk(
  "apiStudentSlice/ Withdraw balance",
  async (params: any) => {
    const { id, balance, token } = params;
    const response = await withdrawBalance([...id], balance, token);
    return response.data;
  }
);

export interface IApiStudentSliceState {
  statusAdd: null;
  statusWithdraw: null;
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
        state.statusAdd = null;
        state.statusWithdraw = null;
        state.loading = true;
      })
      .addCase(AddBalance.fulfilled, (state, action) => {
        state.statusAdd = action.payload.status
        state.loading = false;
      })
      .addCase(AddBalance.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "An error occurred";
      })
      .addCase(Withdraw.pending, (state) => {
        state.loading = true;
      })
      .addCase(Withdraw.fulfilled, (state, action) => {
        state.statusWithdraw = action.payload.status
        state.loading = false;
      })
      .addCase(Withdraw.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "An error occurred";
      });
  },
});

export const {} = apiStudentSlice.actions;

export default apiStudentSlice.reducer;
