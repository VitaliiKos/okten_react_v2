import {axiosService} from "./axios.service";

import {breakPoint} from "../config";

const postService = {
    getAll: () => axiosService.get(breakPoint.posts).then(value => value.data),
    getById: (id) => axiosService.get(`${breakPoint.posts}/${id}`).then(value => value.data)
}

export {
    postService
}