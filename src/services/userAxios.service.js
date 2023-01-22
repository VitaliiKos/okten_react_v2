import axios from "axios";

import userBaseURL from "../urls/userUrls";

export const userAxiosService = axios.create({baseURL:userBaseURL});
