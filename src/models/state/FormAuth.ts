export interface IForm {
    login: {
        value: string,
        valid: boolean | null
        type: string

    }
    password: {
        value: string,
        valid: boolean | null,
        type: string
    }
    error: string
}


export interface IValueForm {
    email: string,
    password: string
}

export  interface IUserState {
    user: {
        user: {
            isAuth: boolean
            id: string,
            name: string,
            email: string,
            password: string,
            registrationDate: string,
            first_entry: boolean,
            iat: string,
            exp: string,
            roleId: number | undefined
        }
       
    }
}