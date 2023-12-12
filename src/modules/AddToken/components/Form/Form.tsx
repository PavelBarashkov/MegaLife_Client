import { InputUsers } from "../InputUsers/InputUsers";
import { InputItem } from "../InputItem/InputItem";
import { InputBalance } from "../InputBalance/InputBalance";

export const Form = () => {

  return (
    <form>
      <InputItem label="Выберите ученика">
        <InputUsers/>
      </InputItem>
      <InputItem label="Введите количество умников">
        <InputBalance/>
      </InputItem>
    </form>
  );
};
