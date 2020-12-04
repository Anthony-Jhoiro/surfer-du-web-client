
import axios from 'axios';

const ip = 'http://146.59.202.19:8080';
export async function login(login, password){
    const response = await axios.post(ip + "/auth/login");
    if(response.status === 200){
        const token = response.headers["x-access-token"];
        localStorage.setItem("token", token);
        return true;
    }
    else {
        return false;
    }
}

export async function isLoged(){
    if(localStorage.getItem("token") === null){
        return "nonconnect";
    }
    const response = await axios.post(ip + "/auth/login", {headers: {authorisation: "Bearer " + localStorage.getItem("token")}});
    if (response.status === 403){
        localStorage.removeItem("token");
        return "deconnect";
    }
    else {
        return "success";
    }
}