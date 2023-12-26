import { FormPasswordReset } from "../components/FormPasswordReset/FormPasswordReset";
import { FirstScreen } from "../components/FirstScreen/FirstScreen";
import { Form } from "../components/UI/Form/Form";

export const PasswordReset = () => {
  return (
    <FirstScreen>
      <Form>
        <FormPasswordReset />
      </Form>
    </FirstScreen>
  );
};
