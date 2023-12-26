import axios from "axios";

export const getUsers = async (token: string) => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_URL}/api/user/all`,
    {
      headers: {
        Authorization: `Beare ${token}`,
      },
    }
  );
  return response;
};
