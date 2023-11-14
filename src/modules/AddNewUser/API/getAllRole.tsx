import axios from "axios"

export const getAllRole = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/role/all`);
    return response;
}