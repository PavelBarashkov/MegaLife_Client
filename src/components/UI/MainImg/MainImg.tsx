import imgContainer from '../../../assets/img/img-auth.png';
import classesMainImg from './mainImg.module.css';


export const MainImg = () => {
  return (
    <img  className={classesMainImg.img} src={imgContainer} alt="Девочка" />   

  )
}
