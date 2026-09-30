// import axios from "axios"
import API from "../../api"


const API_URL = "/api/users"


//Register User
const register = async (userData) => {
    const response = await API.post(API_URL, userData)

    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data))
    }
    return response.data

}


//Login a user
const login = async (userData) => {
    const response = await API.post(API_URL + "/login", userData)

    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data))
    }
}


//Logout a user
const logout = () => localStorage.removeItem("user")


const authService = { register, logout, login }


export default authService