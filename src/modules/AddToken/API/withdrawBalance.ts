import axios from "axios";
import qs from "qs";

export const withdrawBalance = async (
  id: string[],
  balance: number,
  token: string
) => {
  const response = await axios.patch(
    `${process.env.REACT_APP_API_BACKEND}/students/balance/withdraw`,
    null,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      paramsSerializer: function (params) {
        return qs.stringify(params, { arrayFormat: "repeat" });
      },
      params: {
        accounts_ids: id,
        amount: balance,
      },
    }
  );
  return response;
};
