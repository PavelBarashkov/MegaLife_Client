import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import formSlice from '../slices/formSlice';
import userSlice from '../slices/userSlice';
import formAuth from '../slices/formAuth';

export const store = configureStore({
  reducer: {
    formAuth: formAuth,
    user: userSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
