import React from "react";
import classes from "./btn.module.css"

interface IBtnProps {
    children: React.ReactNode
    icon?: string
}

export const Btn = ({ children, icon, ...props }: IBtnProps) => {

    if (icon) {
        return (
            <button  
            {...props} 
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
        >
            {children}
        </button>
    );
};
