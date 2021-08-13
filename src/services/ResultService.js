import axios from 'axios';
import authHeader from './auth-header';

const API_BASE_URL = "http://localhost:8080/stdntResult/result";

class ResultService {

    getResults(){
        console.log("Get All Results");
        return axios.get(API_BASE_URL, {headers:authHeader()});
    }

    saveUser(user){
        console.log("Add New User");
        return axios.post("http://localhost:8080/userData/register", user);
    }

    getAllUser(){
        return axios.get("http://localhost:8080/userData/user", {headers:authHeader()});
    }

    loginUser(user){
        console.log("Login New User");
        return axios
        .post("http://localhost:8080/login", user)
        .then(response => {
            console.log("In Service "+ JSON.stringify(response.data.username));
            if (response.data.accessToken){
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response;
        }); 
    }

    logout() {
        localStorage.removeItem("user");
      }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));;
      }


}

export default new ResultService()