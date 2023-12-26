import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userSlice from '../slices/userSlice';
import formAuth from '../slices/formAuth';
import usersSlice from '../../modules/AllAccounts/slice/usersSlice';
import RolesSlice from '../../modules/AddNewUser/slices/RolesSlice';
import { apiStudentSlice, studentsSlice } from '../../modules/AddToken';

export const store = configureStore({
  reducer: {
    formAuth: formAuth,
    user: userSlice,
    users: usersSlice,
    roles: RolesSlice,
    students: studentsSlice.reducer,
    apiStudent: apiStudentSlice.reducer
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
