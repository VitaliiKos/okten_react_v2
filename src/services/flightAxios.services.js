import axios from "axios";

import userBaseURL from "../urls/userUrls";

export const flightAxiosService = axios.create({baseURL:userBaseURL});

