import { Container } from '../components/UI/Container/Container';
import { ContainerFrom } from '../components/UI/ContainerForm/ContainerForm';
import { ContainerDecor } from '../components/UI/ContainerDecor/ContainerDecor';
import { MainImg } from '../components/UI/MainImg/MainImg';
import { FormFitrstEntry } from '../components/FormFitrstEntry/FormFitrstEntry';
import { Form } from '../components/UI/Form/Form';
import { FirstScreen } from '../components/FirstScreen/FirstScreen';


export const FirstEntry = () => {

    return (
        <FirstScreen>
            <Form>
                <FormFitrstEntry/>
            </Form>
        </FirstScreen>
      
    )
}
