import React from "react";
import classesFormAuth from "./form.module.css";

interface IFormAuthProps {
  children: React.ReactNode;
}

export const Form = ({ children }: IFormAuthProps) => {
  return <form className={classesFormAuth.form}>{children}</form>;
};
