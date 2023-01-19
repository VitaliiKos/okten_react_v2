import {urls} from "../urls";


const getUsers = () => {
    return fetch(urls.users)
        .then(value => value.json());
}


const getPosts = (id) => {
    return fetch(`${urls.users}/${id}/posts`)
        .then(value => value.json());
}

const getComments = (id) => {
    return fetch(`${urls.comments}/${id}/comments`)
        .then(value => value.json());
}

export const userService = {
    getUsers,
    getComments,
    getPosts
};