import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MyButton } from '../components/UI/myButton/MyButton';
import { Logo } from '../components/UI/Logo/Logo';
import { useAppDispatch } from '../redux/hooks/hooks';
import { useNavigate } from 'react-router-dom';
import { unlogin } from '../redux/slices/userSlice';
import { LOGIN_ROUTE } from '../routes/consts';

import user_img from '../assets/img/user-check.png';
import vector from '../assets/img/star_6506601 1.png';
import history from '../assets/img/history.png';
import plus from '../assets/img//plus-circle.png';



import '../style/home/home.css'

export const Home = () => {
    const dispatch = useAppDispatch();
    const navigat = useNavigate();
    function unloginn() {
        localStorage.removeItem('token');
        dispatch(unlogin());
        navigat(LOGIN_ROUTE);
        
    }
  return (
    <>
    <div className='container-home'>
        <div className='aside-home'>
            <div className='aside-home__logo'>
                <Logo/>
            </div>
            <div className='aside-home__title'>
                Меню администратора
            </div>
            <div className='aside-home__page'>
                <div className='aside-home__page__item active'><img src={user_img} alt="" /><p>Учетные записи</p></div>
                <div className='aside-home__page__item'><img src={vector} alt="" /><p>Начисление/списание умников</p></div>
                <div className='aside-home__page__item'><img src={history} alt="" /><p>История начислений/списаний</p></div>
            </div>

        </div>
        <div className='main-home'>
            <Navbar className='navbar' bg="light" data-bs-theme="light">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link className='link active'>Учетные записи</Nav.Link>
                        <Nav.Link className='link'>Начисление/списание умников</Nav.Link>
                        <Nav.Link className='link'>История начислений/списаний</Nav.Link>

                    </Nav>
                    <Nav className="mo-auto">
                        <button 
                            className='btn-unlogin'
                            onClick={()=> unloginn()}
                        >
                            Выйти
                        </button>
                    </Nav>
                </Container>
            </Navbar>
            <div className='main-home__container'>
                <div className='main-home__container__main'>
                    <h4>Учетные записи</h4>
                    <button className='btn-add-user'><img src={plus} alt="" /><p>Новая учетная запись</p></button>
                    <table className='table'>
                        <tr className='table__header'>
                            <th className='table__header-item'>ФИО</th>
                            <th className='table__header-item'>Дата рождения</th>
                            <th className='table__header-item'>Электронная почта</th>
                            <th className='table__header-item'>Телефон</th>
                            <th className='table__header-item'>Тип учетной записи</th>

    
                        </tr>
                        <tr>
                            <td className='table__header-item'>Гурин Александр Александрович</td>
                            <td className='table__header-item'>17.04.2013</td>
                            <td className='table__header-item'>Alexexex13@mail.ru</td>
                            <td className='table__header-item'>+7 (903) 217-22-16</td>
                            <td className='table__header-item'>Ученик</td>
                        </tr>
                        <tr>
                            <td className='table__header-item'>Гурин Александр Александрович</td>
                            <td className='table__header-item'>17.04.2013</td>
                            <td className='table__header-item'>Alexexex13@mail.ru</td>
                            <td className='table__header-item'>+7 (903) 217-22-16</td>
                            <td className='table__header-item'>Ученик</td>
                        </tr>
                    </table>
                </div>
                {/* <button className='btn_prev'>{`< Назад`}</button> */}
            </div>
        </div>
        
    </div>
    
    
    </>
    
  );
}
