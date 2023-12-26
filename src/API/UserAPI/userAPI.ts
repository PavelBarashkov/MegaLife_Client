import { $authHost, $host } from "../index";
import jwt_decode from "jwt-decode";

// export const registration = async (name: string, email, password) => {
//     const { data } = await $host.post('api/user/registration', {name, email, password});
//     localStorage.setItem('token', data.token);
//     return jwt_decode(data.token);
// };

export const login = async (email: string, password: string) => {
  const data = await $host.post("api/user/login", { email, password });
  localStorage.setItem("token", data.data.token);
  return {
    data,
    user_info: jwt_decode(data.data.token),
  };
};

export const sendNewPassword = async (email: string) => {
  const response = await $host.post("/api/user/new/password", { email });
  localStorage.setItem("MegaLife_user_email", email);
  return response;
};

export const resetPassword = async (password: string) => {
  const email = localStorage.getItem("MegaLife_user_email");
  const response = await $host.post("/api/user/reset/password", {
    email,
    password,
  });
  return response;
};

export const check = async () => {
  const { data } = await $authHost.get("api/user/auth");
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};
