import { Container } from '../components/UI/Container/Container';
import { ContainerFrom } from '../components/UI/ContainerForm/ContainerForm';
import { ContainerDecor } from '../components/UI/ContainerDecor/ContainerDecor';
import { MainImg } from '../components/UI/MainImg/MainImg';
import { FormPasswordReset } from '../components/FormPasswordReset/FormPasswordReset';
import { FormNewPassword } from '../components/FormNewPassword/FormNewPassword';

export const NewPassword = () => {

    return (
        <Container>
            <ContainerFrom>
                <FormNewPassword/>
            </ContainerFrom>
            <ContainerDecor>
                <MainImg/>
            </ContainerDecor>
        </Container>
    
    )
}
