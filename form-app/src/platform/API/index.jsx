import axios from "axios";


const Api = 'https://crudcrud.com/api/f8ebf43ee3374ef99b4e9c0a5fff45f9/'

export const PostUsers = (data) => {
    return axios.post(`${Api}users`, data)
}
export const GetUsers = () => {
    return axios.get(`${Api}users`)
}

export const GetUser = (id) => {
    return axios.get(`${Api}users/${id}`)
}