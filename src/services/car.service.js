import {carAxiosService} from "./carAxios.service";
import {carsUrl} from "../config";

export const carService = {
    addNewCar: (car) => carAxiosService.post(carsUrl.cars, car).then(value => value.data),
    getAll: () => carAxiosService.get(carsUrl.cars).then(value => value.data),
    updateById: (carId, car) => carAxiosService.patch(`${carsUrl.cars}/${carId}`, car).then(value => value.data),
    deleteById: (carId) => carAxiosService.delete(`${carsUrl.cars}/${carId}`)
}