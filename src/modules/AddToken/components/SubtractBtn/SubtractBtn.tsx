import classes from "./subtractBtn.module.css"

export const SubtractBtn = ({click}:any) => {

  return (
    <button 
        onClick={click}
        className={classes.btn}
    >
        Списать
    </button>
  )
}
