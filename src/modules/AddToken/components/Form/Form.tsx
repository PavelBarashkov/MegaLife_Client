import { InputUsers } from "../InputUsers/InputUsers";
import { InputItem } from "../InputItem/InputItem";
import { InputBalance } from "../InputBalance/InputBalance";
import classes from "./form.module.css";
import { BtnsContainer } from "../BtnsContainer/BtnsContainer";
import { useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";
export const Form = () => {
  const { loader, error } = useSelector((state: any) => state.students);
  return (
    <form className={classes.form}>
      <InputItem label="Выберите ученика">
        <InputUsers />
      </InputItem>
      <InputItem label="Введите количество умников">
        <InputBalance />
      </InputItem>
      <BtnsContainer />

      {loader && <Spinner/>}
      {error && <div>{error}</div>}
      {(!loader && !error) && <div>Умники успешно начислены!</div> }
    </form>
  );
};
