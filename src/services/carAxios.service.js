import axios from "axios";

import {carsBaseUrl} from "../config";


const carAxiosService = axios.create({baseURL: carsBaseUrl});

export {carAxiosService};