import {axiosService} from "./axios.service";
import {breakPoint} from "../config";

const commentService = {
    getAll: () => axiosService.get(breakPoint.comments).then(value => value.data),
    getByIdPost: (id) => axiosService.get(`posts/${id}/${breakPoint.comments}`).then(value => value.data),
    getById: (id) => axiosService.get(`${breakPoint.comments}/${id}`).then(value => value.data)
}

export {
    commentService
}