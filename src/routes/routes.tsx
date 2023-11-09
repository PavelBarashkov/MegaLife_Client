import { ACCOUNTS_ROUTE, FIRST_LOGIN_ROUTE, LOGIN_ROUTE, NEW_PASSWORD_ROUTE, PASWORD_RESET_ROUTE } from "./consts";
import { Auth } from "../pages/Auth";
import { Accounts } from "../pages/Accounts";
import { FirstEntry } from "../pages/FirstEntry";
import { PasswordReset } from "../pages/PasswordReset";
import { NewPassword } from "../pages/NewPassword";

interface Path {
    path: string
    element: React.ReactNode,
}

export const authRoutes: Path[] = [ 
    {
        path: ACCOUNTS_ROUTE,
        element: <Accounts/>,
    },
    {
        path: FIRST_LOGIN_ROUTE,
        element: <FirstEntry/>,
    },
];

export const publicRoutes: Path[] = [ 
    {
        path: LOGIN_ROUTE,
        element: <Auth/>,
    },
    {
        path: PASWORD_RESET_ROUTE,
        element: <PasswordReset/>,
    },
    {
        path: NEW_PASSWORD_ROUTE,
        element: <NewPassword/>,
    },
    {
        path: '/*',
        element: <Auth/>
    }
];