import { ACCOUNTS_ROUTE, ADD_NEW_USER_ROUTE, ADD_TOKENS, FIRST_LOGIN_ROUTE, LOGIN_ROUTE, NEW_PASSWORD_ROUTE, PASWORD_RESET_ROUTE } from "./consts";
import { Auth } from "../pages/Auth";
import { Accounts } from "../pages/Accounts";
import { FirstEntry } from "../pages/FirstEntry";
import { PasswordReset } from "../pages/PasswordReset";
import { NewPassword } from "../pages/NewPassword";
import { CreateNewUser } from "../pages/CreateNewUser";
import { AddTokens } from "../pages/AddTokens";

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
        path: ADD_NEW_USER_ROUTE,
        element: <CreateNewUser/>,
    },
    {
        path: FIRST_LOGIN_ROUTE,
        element: <FirstEntry/>,
    },
    {
        path: ADD_TOKENS,
        element: <AddTokens/>,
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