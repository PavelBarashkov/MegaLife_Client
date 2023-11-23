import React from "react";
import classes from "./btn.module.css"

interface IBtnProps {
    children: React.ReactNode
    icon?: string
    onClick?:() => void
}

export const Btn = ({ children, icon, onClick, ...props }: IBtnProps) => {

    if (icon) {
        return (
            <button  
            {...props} 
            onClick={onClick}
            className={classes.btn}
        >
            <div className={classes.btn_container}>
                <img src={icon} alt="" />
                {children}
            </div>
        </button>
        )
   
    }
    return (
        <button  
            {...props} 
            className={classes.btn}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
