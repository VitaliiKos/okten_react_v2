import {urls} from "../urls";


const getUsers =()=>{
    return fetch(urls.users)
        .then(value => value.json());
}

const getUserById =(id)=>{
    return fetch(`${urls.user}/${id}`)
        .then(value => value.json());
}

const getPosts =(id)=>{
    return fetch(`${urls.posts}${id}`)
        .then(value => value.json());
}

export const userService = {
    getUsers,
    getUserById,
    getPosts
};