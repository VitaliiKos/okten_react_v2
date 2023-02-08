import axios from "axios";

import {carsBaseUrl} from "../config";

export const carAxiosService = axios.create({baseURL: carsBaseUrl});