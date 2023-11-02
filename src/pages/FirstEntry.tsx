import { Container } from '../components/UI/Container/Container';
import { ContainerFrom } from '../components/UI/ContainerForm/ContainerForm';
import { ContainerDecor } from '../components/UI/ContainerDecor/ContainerDecor';
import { MainImg } from '../components/UI/MainImg/MainImg';
import { FormFitrstEntry } from '../components/FormFitrstEntry/FormFitrstEntry';


export const FirstEntry = () => {

    return (
        <Container>
            <ContainerFrom>
                <FormFitrstEntry/>
            </ContainerFrom>
            <ContainerDecor>
                <MainImg/>
            </ContainerDecor>
        </Container>
    
    )
}
