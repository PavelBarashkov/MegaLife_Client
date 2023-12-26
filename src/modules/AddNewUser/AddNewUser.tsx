import React, { useState } from "react";
import { BtnPrev } from "./components/BtnPrev/BtnPrev";
import { Title } from "../../components/UI/Title/Title";
import { MainContainer } from "./components/MianContainer/MainContainer";
import { FromContainer } from "./components/FromContainer/FromContainer";
import { Form } from "./components/From/Form";
import { Btn } from "../../components/UI/Btn/Btn";
import { BtnClose } from "./components/BtnClose/BtnClose";
import { ContainerForSend } from "./components/ContainerForSend/ContainerForSend";
import { CreateUser } from "./API/CreateUser";
import { useFetching } from "../../hooks/useFetching";
import { Spinner } from "react-bootstrap";

export const AddNewUser = () => {
  const token = localStorage.getItem("token");
    const [user, setUser] = useState<string>('')
  const [form, setForm] = useState({
    role: {
      id: null,
      label: "Выбрать",
    },
    name: "",
    email: "",
    phone: "",
    birthday: "",
  });

  const handleDropdown = (data: any) => {
    setForm((prevForm) => ({
      ...prevForm,
      role: {
        id: data.id,
        label: data.name,
      },
    }));
  };

  function handlerInput({ target }: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = target;

    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  }
  const resetForm = () => {
    setForm({
      role: {
        id: null,
        label: "Выбрать",
      },
      name: "",
      email: "",
      phone: "",
      birthday: "",
    });
  };

  const [createUser, loading, error] = useFetching(
    async (
      token: string,
      name: string,
      email: string,
      phone: string,
      birthday: string,
      roleId: number | null
    ) => {
      await CreateUser(
        token,
        form.name,
        form.email,
        form.phone,
        form.birthday,
        form.role.id
      );
      setUser('Пользователь успешно добавлен')
    }
  );

  const sendForm = async () => {
    if (token) {
       createUser(
        token,
        form.name,
        form.email,
        form.phone,
        form.birthday,
        form.role.id
      );
    }
  };

  return (
    <MainContainer>
      <BtnPrev />
      <Title title={"Регистрация нового пользователя"} />
      <FromContainer>
        <Form
          form={form}
          handleDropdown={handleDropdown}
          handlerInput={handlerInput}
        />
      </FromContainer>
      <ContainerForSend>
        <Btn onClick={sendForm}>Сохранить</Btn>
        <BtnClose click={resetForm}></BtnClose>
      </ContainerForSend>
      { loading ? (
        <Spinner/> ) : (
          <>
            {error ? (
              <div>{error}</div>
            ) : (
              <div>{user}</div>
            )}
          </>
        )
            }
     
        
    </MainContainer>
  );
};
