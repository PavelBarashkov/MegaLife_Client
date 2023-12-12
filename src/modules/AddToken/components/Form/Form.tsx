import { InputUsers } from "../InputUsers/InputUsers";
import { InputItem } from "../InputItem/InputItem";

export const Form = () => {

  return (
    <form>
      <InputItem label="Выберите ученика">
        <InputUsers/>
      </InputItem>
    </form>
  );
};
