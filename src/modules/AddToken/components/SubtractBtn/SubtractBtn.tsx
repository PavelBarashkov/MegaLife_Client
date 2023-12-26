import classes from "./subtractBtn.module.css"

interface ISubtractBtnProps {
  onClick:(e: any) => void
}

export const SubtractBtn = ({onClick}:ISubtractBtnProps) => {

  return (
    <button 
        onClick={(e) => onClick(e)}
        className={classes.btn}
    >
        Списать
    </button>
  )
}
