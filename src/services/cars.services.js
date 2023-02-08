import {carsBreakPoint} from "../config";
import {carAxiosService} from "./carAxiosService";

const carsServices = {
    getAll: () => carAxiosService.get(carsBreakPoint.cars),
    addNew: (data) => carAxiosService.post(carsBreakPoint.cars, data),
    getById: (id) => carAxiosService.get(`${carsBreakPoint.cars}/${id}`),
    deleteById: (id) => carAxiosService.delete(`${carsBreakPoint.cars}/${id}`),
    putById: (id, data) => carAxiosService.put(`${carsBreakPoint.cars}/${id}`, data)
}

export {carsServices};