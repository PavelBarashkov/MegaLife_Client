import React, { useEffect, useState } from "react";
import { Logo } from "../UI/Logo/Logo";
import { TitileForm } from "../UI/TitleForm/TitileForm";
import { TextFrom } from "../UI/TextForm/TextFrom";
import { MyInput } from "../UI/MyInput/myInput";
import { MyButton } from "../UI/myButton/MyButton";
import { ContainerInfo } from "../UI/ContainerInfo/ContainerInfo";
import { ToPage } from "../UI/ToPage/ToPage";
import { handlerFromReset } from "../utils/form-handlers/handlerFromReset";
import { LOGIN_ROUTE } from "../../routes/consts";
import { useNavigate } from "react-router-dom";
import { useFetching } from "../../customHooks/useFetching";
import { sendNewPassword } from "../../API/UserAPI/userAPI";

export interface IFormReset {
  login: {
    value: string;
    valid: boolean | null;
    type: string;
  };
  error: string;
}

export const FormPasswordReset = () => {
  const [count, setCount] = useState(60);
  const [valid, setValid] = useState(false);
  const navigat = useNavigate();
  const [form, setForm] = useState<IFormReset>({
    login: {
      value: "",
      valid: null,
      type: "text",
    },
    error: "",
  });

  function handlerInput({ target }: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: { ...prevForm, value: value },
    }));
  }

  const [sendPassword, loading, error] = useFetching(async (email: string) => {
    const response = await sendNewPassword(email);
    console.log(response);
  });

  const handlerBtnNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handlerFromReset(form, setForm);
    if (form.login.valid) {
      setValid(true);
    }
    sendPassword(form.login.value);
  };

  useEffect(() => {
    let timerId: NodeJS.Timeout | undefined;

    if (valid && count > 0) {
      timerId = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);
    }

    if (count === 0) {
      setValid(false);
      setCount(60);
    }
    return () => clearInterval(timerId);
  }, [valid, count]);

  return (
    <>
      <Logo />
      <TitileForm>Восстановление пароля</TitileForm>
      <TextFrom />
      <MyInput
        name="login"
        placeholderTitle={""}
        valid={form.login.valid}
        valueInput={form.login.value}
        value={form.login.value}
        onFocus={() => console.log()}
        onChange={handlerInput}
      />
      {form.login.valid === false && (
        <ContainerInfo textError={form.error}>
          <ToPage toPage="!#">Обратиться в техподдержку</ToPage>
        </ContainerInfo>
      )}
      <MyButton
        disabled={valid}
        style={{ marginTop: 16 }}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => handlerBtnNext(e)}
      >
        {!valid && `Далее`}
        {valid &&
          `Отправить повторно через 00:${count < 60 ? "0" + count : count}`}
      </MyButton>
      <p className="form-text-recovery">
        Я вспомнил пароль.{" "}
        <span
          onClick={() => navigat(LOGIN_ROUTE)}
          className="convention-recovery"
        >
          Вернуться
        </span>{" "}
      </p>
    </>
  );
};
