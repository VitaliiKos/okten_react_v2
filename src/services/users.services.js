import {axiosService} from "./axiosService";
import {usersBreakPoint} from "../config";

const usersServices = {
    getAll: () => axiosService.get(usersBreakPoint.users).then(value => value.data),
    getById: (userId) => axiosService(`${usersBreakPoint.users}/${userId}`).then(value => value.data)
}
export {usersServices};
