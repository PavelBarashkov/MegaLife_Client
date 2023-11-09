import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './myNavLink.module.css'

interface MyNavLinkProps {
    title: string
    href: string,
    icon?: string
}

function active({isActive}: any) {
    return isActive? `${classes.navLink} ${classes.naLink_active}` : `${classes.navLink}`
}

export const MyNavLink = ({href, title, icon}: MyNavLinkProps) => {

    if(icon) {
        return (
            <NavLink 
                to={href} 
                className={active}
            >
                    <img className={classes.icon} src={icon} alt='user'/>
                        {title}
            </NavLink>
        )
    }

    return (
        <NavLink 
            to={href}
            className={active} 
        >
            {title}
        </NavLink>
    )
}
