import axios from "axios"

export const addBalance = async (id: string, balance: number, token: string) => {
    const response = await axios.patch(`${process.env.REACT_APP_API_URL}/api/user/registration`, { // TODO поменять URL на бэк Димы, отправить токен
        id,
        balance
    },
    {
        headers: 
        {
            Authorization: token
        }
    }
)
    return response
}