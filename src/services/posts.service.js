import {axiosService} from "./axios.service";
import {breakPoint} from "../config";

export const postsService = {
    getAll: () => axiosService.get(breakPoint.posts).then(value => value.data),
    getById: (postId) => axiosService.get(`${breakPoint.posts}/${postId}`).then(value => value.data)
}