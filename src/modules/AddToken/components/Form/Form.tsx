import { InputUsers } from "../InputUsers/InputUsers";
import { InputItem } from "../InputItem/InputItem";
import { InputBalance } from "../InputBalance/InputBalance";
import classes from "./form.module.css";
import { BtnsContainer } from "../BtnsContainer/BtnsContainer";
import { useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";
import { SuccessIcon } from "../../assets/SuccessIcon";
import { useEffect } from "react";
import { useAppDispatch } from "../../../../redux/hooks/hooks";
import { resetStatus } from "../../slice/apiStudentSlice";
export const Form = () => {
  const { statusAdd, statusWithdraw, loading, error } = useSelector((state: any) => state.apiStudent);
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(resetStatus())
  }, [])
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
            {statusAdd === 200 && (<div><SuccessIcon/> Умники успешно начислены!</div>)}
            {statusWithdraw === 200 && (<div><SuccessIcon/> Умники успешно списаны!</div>)}
            </>
          )}
        </>
      )}
    </form>
  );
};
