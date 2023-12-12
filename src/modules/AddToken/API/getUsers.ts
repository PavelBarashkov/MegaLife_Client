import axios from "axios";

export const getUsers = async (token: string) => {
  const response = await axios.patch(
    `${process.env.REACT_APP_API_URL}/api/user/all`, // TODO поменять бэк для получения только студентов
    {
      headers: {
        Authorization: token,
      },
    }
  );
  return response;
};
