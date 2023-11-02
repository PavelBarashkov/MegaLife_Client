import logo from '../../../assets/img/logo.png';
import classesLogo from './logo.module.css';


export const Logo = () => {
  return (
    <img  className={classesLogo.logo} src={logo} alt="MegaLife" />   

  )
}
