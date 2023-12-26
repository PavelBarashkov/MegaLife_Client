import axios from "axios";

export class Service {
  static async authorization(email: string, password: string) {
    const response = await axios.post("http://localhost:5000/api/user/login", {
      email,
      password,
    });
    return response;
  }

  static async firstEntry(id: number, password: string) {
    const response = await axios.put(
      `${process.env.REACT_APP_API_URL}/api/user/${id}`,
      { password }
    );
    return response;
  }
}
