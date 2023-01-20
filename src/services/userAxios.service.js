import axios from "axios";

import baseUrl from "../urls/userUrls";

const userAxiosService = axios.create({baseUrl});

export {userAxiosService};