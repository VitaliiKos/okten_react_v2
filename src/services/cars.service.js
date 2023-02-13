import {mainUrls} from "../config";
import {apiService} from "./apiService";

const carsServices = {
    getAll: (page=1) => apiService.get(mainUrls.cars.cars, {params:{page}}),
    addNew: (data) => apiService.post(mainUrls.cars.cars, data),
    deleteById: (id) => apiService.delete(mainUrls.cars.byId(id)),
    putById: (id, data) => apiService.put(mainUrls.cars.byId(id), data)
}

export {carsServices};