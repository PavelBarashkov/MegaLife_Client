import { InputUsers } from "../InputUsers/InputUsers";
import { InputItem } from "../InputItem/InputItem";
import { InputBalance } from "../InputBalance/InputBalance";
import classes from "./form.module.css";
import { BtnsContainer } from "../BtnsContainer/BtnsContainer";
import { useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";
export const Form = () => {
  const { statusAdd, statusWithdraw, loading, error } = useSelector((state: any) => state.apiStudent);
  return (
    <form className={classes.form}>
      <InputItem label="Выберите ученика">
        <InputUsers />
      </InputItem>
      <InputItem label="Введите количество умников">
        <InputBalance />
      </InputItem>
      <BtnsContainer />

      {loading ? (
        <Spinner />
      ) : (
        <>
          {error ? <div>{error}</div> : (
            <>
            {statusAdd === 200 && (<div>Умники успешно начислены!</div>)}
            {statusWithdraw === 200 && (<div>Умники успешно списаны!</div>)}
            </>
          )}
        </>
      )}
    </form>
  );
};
