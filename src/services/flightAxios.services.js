import axios from "axios";

import baseURL from "../urls/flightUrl";

const flightAxiosService = axios.create({baseURL});

export {flightAxiosService};