import {flightAxiosService} from "./flightAxios.services";
import flightUrl from "../urls/flightUrl";

export const flightService = {
    getAll: () => flightAxiosService.get(flightUrl).then(value => value.data),

}