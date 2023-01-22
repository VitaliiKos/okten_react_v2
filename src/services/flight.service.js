import {flightAxiosService} from "./flightAxios.services";
import {flightUrls} from "../urls";

export const flightService = {
    getAll: () => flightAxiosService.get(flightUrls.flights).then(value => value.data),

}