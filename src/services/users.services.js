import {axiosService} from "./axiosService";
import {usersBreakPoint} from "../config";

const usersServices = {
    getAll: () => axiosService.get(usersBreakPoint.users),
    getById: (userId) => axiosService(`${usersBreakPoint.users}/${userId}`),
    getUserPosts: (userId) => axiosService(`${usersBreakPoint.users}/${userId}/posts`)
}
export {usersServices};
