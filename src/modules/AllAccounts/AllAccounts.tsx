import { Container } from './components/Container/Container'
import { Header } from './components/Header/Header'


export const AllAccounts = () => {
  return (
    <Container>
        <Header/>
        <table>
            <thead>
                <tr>
                    <th>ФИО</th>
                    <th>Дата рождения</th>
                    <th>Электронная почта</th>
                    <th>Телефон</th>
                    <th>Тип учетной записи</th>
                </tr>
            </thead>
            <tr>
                <td>Гурин Александр Александрович</td>
                <td>17.04.2013</td>
                <td>Alexexex13@mail.ru</td>
                <td>+7 (903) 217-22-16</td>
                <td>Ученик</td>
            </tr>
        </table>
    </Container>
  )
}
