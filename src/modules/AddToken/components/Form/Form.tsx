import React, { useState } from "react";
import { InputUsers } from "../InputUsers/InputUsers";
import { InputItem } from "../InputItem/InputItem";

export const Form = () => {
  const [form, setForm] = useState({
    users: [],
    tokens: null,
  });


  function handlerInput({ target }: React.ChangeEvent<HTMLInputElement>) {
    const {id, value} = target;
    setForm(prevForm => ({...prevForm, [id]: value}))
}

  return (
    <form>
      <InputItem label="Выберите ученика">
        <InputUsers handlerInput={handlerInput} value={form.users}/>
      </InputItem>
    </form>
  );
};
