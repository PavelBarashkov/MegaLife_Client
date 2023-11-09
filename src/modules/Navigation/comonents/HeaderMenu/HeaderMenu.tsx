import { Nav, Navbar } from 'react-bootstrap'
import { MyNavLink } from '../Ui/MyNanLink/MyNavLink'
import { BtnClose } from '../BtnClose/BtnClose'

export const HeaderMenu = () => {
    return (
        <Navbar data-bs-theme="light">
            <Nav className="me-auto header-menu">
                    <MyNavLink href={'/accounts'} title='Учетные записи'/>
                    <MyNavLink href={'!#'} title='Начисление/списание умников'/>
                    <MyNavLink href={'!#'} title='История начислений/списаний'/>
            </Nav>
            <Nav className="mo-auto">
                <BtnClose/>
            </Nav>
        </Navbar>
    )
}
