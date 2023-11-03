import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes/routes";
import { useSelector } from "react-redux";
import { IUserState } from "../models/state/FormAuth";
import { useAppDispatch } from "../redux/hooks/hooks";
import { setUser } from "../redux/slices/userSlice";
import jwtDecode from "jwt-decode";
import { LOGIN_ROUTE } from "../routes/consts";

export const AppRouter: React.FC = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            dispatch(setUser(jwtDecode(token)))
        }
    }, [])
    const { user } = useSelector((state: IUserState) => state.user);

    return (
        <Routes>
            <Route path="/" element={<Navigate to={LOGIN_ROUTE} />} />
            {user.isAuth && authRoutes.map(({path, element}) => 
                <Route key={path} path={path} element={element} />
            )}
            {publicRoutes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
            ))}
        </Routes>
    );

};
