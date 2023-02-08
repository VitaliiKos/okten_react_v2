import {axiosService} from "./axiosService";
import {postsBreakPoint} from "../config";

const postsServices = {
    getAll: () => axiosService.get(postsBreakPoint.posts),
    getById: (postId) => axiosService.get(`${postsBreakPoint.posts}/${postId}`)
}
export {postsServices};