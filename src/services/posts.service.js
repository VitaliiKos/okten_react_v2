import {axiosService} from "./axiosService";
import {postsBreakPoint} from "../config";

const postsService = {
    getAll: ()=>axiosService.get(postsBreakPoint.posts).then(value => value.data),
    getById: (postId)=> axiosService.get(`${postsBreakPoint.posts}/${postId}`)
}
export {postsService}