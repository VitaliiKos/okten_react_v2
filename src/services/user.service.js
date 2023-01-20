import {userAxiosService} from "./userAxios.service";
import {userUrls} from "../urls";

export const userService = {
    getAll: () => userAxiosService.get(userUrls.users).then(value => value.data),
    getById: (id) => userAxiosService.get(`${userUrls.users}/${id}`).then(value => value.data),
    getPosts: (userID) => userAxiosService.get(`${userUrls.users}/${userID}/posts`).then(value => value.data),
    getComments: (postID) => userAxiosService.get(`${userUrls.comments}/${postID}/comments`).then(value => value.data),

}