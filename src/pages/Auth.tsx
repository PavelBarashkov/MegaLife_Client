import { Container } from '../components/UI/Container/Container';
import { ContainerFrom } from '../components/UI/ContainerForm/ContainerForm';
import { ContainerDecor } from '../components/UI/ContainerDecor/ContainerDecor';
import { MainImg } from '../components/UI/MainImg/MainImg';
import { FormAuth } from '../components/FormAuth/FormAuth';

export const Auth = () => {

    return (
        <Container>
            <ContainerFrom>
                <FormAuth/>
            </ContainerFrom>
            <ContainerDecor>
                <MainImg/>
            </ContainerDecor>
        </Container>
    
    )
}
