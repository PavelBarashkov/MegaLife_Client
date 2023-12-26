import { FirstScreen } from "../components/FirstScreen/FirstScreen";
import { FormAuth } from "../components/FormAuth/FormAuth";
import { Form } from "../components/UI/Form/Form";

export const Auth = () => {
  return (
    <FirstScreen>
      <Form>
        <FormAuth />
      </Form>
    </FirstScreen>
  );
};
