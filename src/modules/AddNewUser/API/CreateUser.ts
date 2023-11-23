import axios from "axios"

export const CreateUser = async (token: string, name: string, email:string, phone:string, birthday:string, roleId:number | null) => {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/user/registration`, {
        name,
        email,
        phone,
        birthday,
        roleId,
    },
    {
        headers: 
        {
            Authorization:`Beare ${token}`
        }
    }
)
    return response
}