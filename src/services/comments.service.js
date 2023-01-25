import {axiosService} from "./axios.service";
import {breakPoint} from "../config";

export const commentsService = {
    getAll: () => axiosService.get(breakPoint.comments).then(value => value.data),
    getByPostId: (postId) => axiosService.get(`${breakPoint.posts}/${postId}/comments`).then(value => value.data)
}