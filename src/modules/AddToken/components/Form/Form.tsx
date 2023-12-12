import { InputUsers } from "../InputUsers/InputUsers";
import { InputItem } from "../InputItem/InputItem";
import { InputBalance } from "../InputBalance/InputBalance";
import classes from "./form.module.css";
import { BtnsContainer } from "../BtnsContainer/BtnsContainer";
export const Form = () => {
  return (
    <form className={classes.form}>
      <InputItem label="Выберите ученика">
        <InputUsers />
      </InputItem>
      <InputItem label="Введите количество умников">
        <InputBalance />
      </InputItem>
      <BtnsContainer/>
    </form>
  );
};
