import {axiosService} from "./axios.service";
import {breakPoint} from "../config";

export const todosService = {
    getAll: () => axiosService.get(breakPoint.todos).then(value => value.data)
}