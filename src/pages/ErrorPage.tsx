import React from "react";
import { Errosvg } from "../assets/img/Errosvg";
import { useNavigate } from "react-router";
import { LOGIN_ROUTE } from "../routes/consts";

export const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        marginBottom: 20,
      }}
      onClick={() => {
        navigate(LOGIN_ROUTE);
      }}
    >
      <Errosvg />
    </div>
  );
};
