import axios from "axios";

export class Service {
    static async authorization(email: string, password: string) {
        const response = await axios.post('http://localhost:5000/api/user/login', {email, password});
        return response;
    }

    static async firstEntry(id: number, password: string) {
        const response = await axios.put(`http://localhost:5000/api/user/${id}`, { password});
        return response;
    }

    static async authUser(login: string, password: string) {
        const data = {
            grant_type: 'password',
            client_id: 'megaLife-web',
            username: login,
            password: password,
            client_secret: 'gTGzY6jmYSLgB7mcvbLeEVVZN4lXVqGx',
            scope: 'openid'
        };

        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        };

        const response = await axios.post(
            'http://localhost:8080/realms/megaLife/protocol/openid-connect/token',
            data,
            { headers: headers }
        );

        return response.data;
    }
}
