import axios from "axios"

export const deleteUserAdmin = async(token: string, id: number) => {
    const response = await axios.delete(`${process.env.REACT_APP_API_URL}/api/user/${id}`, {headers: {
        Authorization: `Beare ${token}`
    }})
    return response;
}