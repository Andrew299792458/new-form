import axios from "axios";

const Api = "https://crudcrud.com/api/655889b0093a4fcfa50e6399c8c15fbb/"

export const PostUsers = (data) => {
    axios
        .post(`${Api}users`, data)
}

export const GetUsers = (id) => {
    return axios.get(`${Api}users/${id}`)
}