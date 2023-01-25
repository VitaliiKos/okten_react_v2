import {axiosService} from "./axios.service";

import {breakPoint} from "../config";

export const albumsService = {
    getAll: () => axiosService.get(breakPoint.albums).then(value => value.data)
}